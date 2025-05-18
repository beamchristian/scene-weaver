// src/app/api/admin/narrative-nodes/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// --- GET: Fetch all Narrative Nodes ---
export async function GET() {
  try {
    const narrativeNodes = await prisma.narrativeNode.findMany({
      orderBy: {
        title: "asc",
      },
      // UNCOMMENTED: Include choices for frontend display
      include: {
        choices: {
          select: {
            id: true,
            text: true,
            nextNodeId: true,
          },
        },
      },
    });

    // MODIFIED: Wrap response in { success: true, nodes: [...] }
    return NextResponse.json(
      { success: true, nodes: narrativeNodes },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching narrative nodes:", error);
    // Keep the error response format consistent
    return NextResponse.json(
      { success: false, error: "Failed to fetch narrative nodes." },
      { status: 500 }
    );
  }
}

// --- POST: Create a new Narrative Node ---
export async function POST(request: Request) {
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

    if (!title || !text) {
      return NextResponse.json(
        {
          success: false,
          error: "Title and text are required for a narrative node.",
        },
        { status: 400 }
      );
    }

    const data: any = {
      title,
      text,
      imageUrl,
      challengeType,
      challengeIdInternal,
      onSuccessNodeId,
      onFailureNodeId,
    };

    const newNarrativeNode = await prisma.narrativeNode.create({
      data: data,
      include: {
        // Include choices in the response so frontend can update its state correctly
        choices: true,
      },
    });

    // MODIFIED: Wrap response in { success: true, node: ... }
    return NextResponse.json(
      { success: true, node: newNarrativeNode },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating narrative node:", error);
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
      { success: false, error: "Failed to create narrative node." },
      { status: 500 }
    );
  }
}
