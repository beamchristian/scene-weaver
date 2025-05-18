// src/app/api/admin/narrative-nodes/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// --- GET: Fetch a single Narrative Node by ID (Optional, uncomment if needed) ---
// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const nodeId = await params.id; // Apply await here too if uncommenting
//   try {
//     // ... rest of GET logic
//   } catch (error: any) {
//     // ...
//   }
// }

// --- PUT: Update an existing Narrative Node by ID ---
export async function PUT(
  request: Request,
  { params }: { params: { id: string } } // Get ID from URL path
) {
  // FIX: Await params before accessing id

  const nodeIdparams = await params; // <--- ADD AWAIT HERE
  const nodeId = nodeIdparams?.id;

  if (!nodeId) {
    return NextResponse.json(
      { success: false, error: "Node ID is required for update." },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    const {
      title,
      text,
      imageUrl,
      challengeType,
      challengeIdInternal,
      onSuccessNodeId,
      onFailureNodeId,
    } = body;

    const dataToUpdate: Record<string, any> = {};
    if (title !== undefined) dataToUpdate.title = title;
    if (text !== undefined) dataToUpdate.text = text;
    if (imageUrl !== undefined)
      dataToUpdate.imageUrl = imageUrl === "" ? null : imageUrl;
    if (challengeType !== undefined)
      dataToUpdate.challengeType = challengeType === "" ? null : challengeType;
    if (challengeIdInternal !== undefined)
      dataToUpdate.challengeIdInternal =
        challengeIdInternal === "" ? null : challengeIdInternal;
    if (onSuccessNodeId !== undefined)
      dataToUpdate.onSuccessNodeId =
        onSuccessNodeId === "" ? null : onSuccessNodeId;
    if (onFailureNodeId !== undefined)
      dataToUpdate.onFailureNodeId =
        onFailureNodeId === "" ? null : onFailureNodeId;

    if (Object.keys(dataToUpdate).length === 0) {
      return NextResponse.json(
        { success: false, error: "No data provided for update." },
        { status: 400 }
      );
    }

    const updatedNarrativeNode = await prisma.narrativeNode.update({
      where: { id: nodeId },
      data: dataToUpdate,
      include: {
        choices: true,
      },
    });

    return NextResponse.json(
      { success: true, node: updatedNarrativeNode },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error updating narrative node ${nodeId}:`, error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, error: "Narrative node not found." },
        { status: 404 }
      );
    }
    if (error.code === "P2002") {
      return NextResponse.json(
        {
          success: false,
          error: "A narrative node with this title already exists.",
        },
        { status: 409 }
      );
    }
    if (error.code === "P2003") {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid success or failure node ID provided. Please ensure the target nodes exist. Problem with field: ${error.meta?.field_name}`,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: `Failed to update narrative node: ${
          error.message || "An unexpected error occurred."
        }`,
      },
      { status: 500 }
    );
  }
}

// --- DELETE: Delete a Narrative Node by ID ---
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } } // Get ID from URL path
) {
  // FIX: Await params before accessing id

  const nodeIdParams = await params;
  const nodeId = nodeIdParams?.id;
  if (!nodeId) {
    return NextResponse.json(
      { success: false, error: "Node ID is required." },
      { status: 400 }
    );
  }

  try {
    // Because your Choice model has `onDelete: Cascade` on the `sourceNode` relation,
    // Prisma will automatically delete all choices that originate from this NarrativeNode
    // when the NarrativeNode itself is deleted.
    const deletedNode = await prisma.narrativeNode.delete({
      where: { id: nodeId },
    });

    return NextResponse.json(
      {
        success: true,
        message: `Narrative node "${deletedNode.title}" and its associated choices deleted successfully.`,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting narrative node ${nodeId}:`, error);
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, error: "Narrative node not found." },
        { status: 404 }
      );
    }
    if (error.code === "P2003") {
      return NextResponse.json(
        {
          success: false,
          error: `Cannot delete node: it is referenced by another record (e.g., a GameState, or nextNode of a Choice). Please remove those references first.`,
        },
        { status: 409 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: `Failed to delete narrative node: ${
          error.message || "An unexpected error occurred."
        }`,
      },
      { status: 500 }
    );
  }
}
