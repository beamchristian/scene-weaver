// src/app/api/admin/narrative-nodes/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { NarrativeNode } from "@/lib/types";

// --- GET: Fetch a single Narrative Node by ID (Optional, uncomment if needed) ---
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const nodeIdParams = await params;
  const nodeId = nodeIdParams?.id;
  try {
    // ... rest of GET logic
  } catch (error: any) {
    console.log("Error " + error);
  }
}

// Helper type for incoming node data (similar to what you pass to setFormData)
type NodeUpdateData = Omit<
  NarrativeNode,
  | "id"
  | "createdAt"
  | "updatedAt"
  | "choices"
  | "incomingChoices"
  | "gameStatesAsCurrent"
  | "gameStatesAsStart"
  | "gameSettingAsStart"
> & {
  choices?: Array<{ id?: string; text: string; nextNodeId: string }>; // Choices can have an optional ID for existing choices
};

// --- PUT: Update an existing Narrative Node by ID ---
export async function PUT(
  request: Request,
  { params }: { params: { id: string } } // Get ID from URL path
) {
  // FIX: Await params before accessing id

  const nodeIdparams = await params;
  const nodeId = nodeIdparams?.id;

  if (!nodeId) {
    return NextResponse.json(
      { success: false, error: "Node ID is required for update." },
      { status: 400 }
    );
  }
  const {
    title,
    text,
    imageUrl,
    challengeType,
    challengeIdInternal,
    onSuccessNodeId,
    onFailureNodeId,
    choices, // Extract choices from the request body
  }: NodeUpdateData = await request.json();

  try {
    // Start a Prisma transaction to ensure atomicity
    const updatedNode = await prisma.$transaction(async (tx) => {
      // 1. Update the NarrativeNode itself
      const node = await tx.narrativeNode.update({
        where: { id: nodeId },
        data: {
          title,
          text,
          imageUrl,
          challengeType,
          challengeIdInternal,
          onSuccessNodeId,
          onFailureNodeId,
        },
      });

      // 2. Manage Choices:
      // Get current choices for this node from the database
      const currentChoicesDb = await tx.choice.findMany({
        where: { sourceNodeId: nodeId },
      });

      const choicesToCreate = choices?.filter((c) => !c.id) || [];
      const choicesToUpdate = choices?.filter((c) => c.id) || [];
      const choicesToDelete = currentChoicesDb.filter(
        (dbChoice) =>
          !choices?.some((reqChoice) => reqChoice.id === dbChoice.id)
      );

      // Delete choices that are no longer in the submitted list
      if (choicesToDelete.length > 0) {
        await tx.choice.deleteMany({
          where: {
            id: {
              in: choicesToDelete.map((c) => c.id),
            },
          },
        });
      }

      // Create new choices
      if (choicesToCreate.length > 0) {
        await tx.choice.createMany({
          data: choicesToCreate.map((c) => ({
            sourceNodeId: nodeId,
            text: c.text,
            nextNodeId: c.nextNodeId,
          })),
        });
      }

      // Update existing choices
      for (const choice of choicesToUpdate) {
        await tx.choice.update({
          where: { id: choice.id },
          data: {
            text: choice.text,
            nextNodeId: choice.nextNodeId,
          },
        });
      }

      // Re-fetch the node with its updated choices for the response
      const nodeWithChoices = await tx.narrativeNode.findUnique({
        where: { id: nodeId },
        include: { choices: true },
      });

      return nodeWithChoices;
    });

    return NextResponse.json(updatedNode);
  } catch (error) {
    console.error("Failed to update node:", error);
    return NextResponse.json(
      { message: "Failed to update node" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
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
