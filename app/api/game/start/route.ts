// src/app/api/game/start/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ApiNarrativeNode } from "@/lib/types";

// Define the initial node title to look up in the database
const INITIAL_NODE_TITLE = "start_node"; // Or some other way to identify the first node

interface StartGameResponse {
  success: boolean;
  gameStateId?: string;
  currentNode?: ApiNarrativeNode;
  error?: string;
}

export async function POST(
  request: Request
): Promise<NextResponse<StartGameResponse>> {
  try {
    // User authentication/placeholder logic
    let user = await prisma.user.findUnique({
      where: { email: "testuser@example.com" },
    });
    if (!user) {
      user = await prisma.user.create({
        data: { email: "testuser@example.com", name: "Test User" },
      });
    }
    const userId = user.id;

    // --- Find the initial narrative node data from DB ---
    const initialDbNode = await prisma.narrativeNode.findFirst({
      where: { title: INITIAL_NODE_TITLE },
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

    if (!initialDbNode) {
      console.error(
        `Initial narrative node with title '${INITIAL_NODE_TITLE}' not found in database.`
      );
      return NextResponse.json(
        {
          success: false,
          error: `Configuration error: Initial node not found.`,
        },
        { status: 500 }
      );
    }

    // Map DB node to the structure expected by the frontend
    const initialApiNode: ApiNarrativeNode = {
      id: initialDbNode.id,
      text: initialDbNode.text,
      // FIXED: Use nullish coalescing to explicitly map `null` to `undefined`
      image: initialDbNode.imageUrl ?? undefined,
      choices: initialDbNode.choices.map((c) => ({
        id: c.id,
        text: c.text,
        nextNodeId: c.nextNodeId,
      })),
      miniChallenge:
        initialDbNode.challengeType &&
        initialDbNode.challengeIdInternal &&
        initialDbNode.onSuccessNodeId &&
        initialDbNode.onFailureNodeId
          ? {
              // FIXED: Use non-null assertion `!` as these are checked to be truthy
              type: initialDbNode.challengeType!,
              challengeId: initialDbNode.challengeIdInternal!,
              onSuccessNodeId: initialDbNode.onSuccessNodeId!,
              onFailureNodeId: initialDbNode.onFailureNodeId!,
            }
          : undefined, // Or null if your frontend expects that for no challenge
    };

    // Create or update a GameState entry
    const newGameState = await prisma.gameState.upsert({
      where: { userId: userId }, // Try to find a GameState for this user
      update: {
        // If it exists, update it to reflect a "new start"
        currentNodeId: initialDbNode.id, // Reset to the initial node
        currentScore: 0, // Reset score for a new game
        stateData: {}, // Reset state data for a new game (or merge if you prefer)
      },
      create: {
        // If it doesn't exist, create a new GameState
        userId: userId,
        currentNodeId: initialDbNode.id,
        currentScore: 0,
        stateData: {},
      },
    });

    return NextResponse.json(
      {
        success: true,
        gameStateId: newGameState.id,
        currentNode: initialApiNode,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error starting new game:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected server error occurred.",
      },
      { status: 500 }
    );
  }
}
