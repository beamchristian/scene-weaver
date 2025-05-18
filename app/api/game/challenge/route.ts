import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { type MiniChallengeType, type ApiNarrativeNode } from "@/lib/types";

interface ChallengeRequest {
  gameStateId: string;
  challengeId: string;
  success: boolean;
}

interface ChallengeResponse {
  success: boolean;
  currentNode?: ApiNarrativeNode;
  error?: string;
}

export async function POST(
  request: Request
): Promise<NextResponse<ChallengeResponse>> {
  try {
    const body: ChallengeRequest = await request.json();
    const { gameStateId, challengeId, success } = body;

    const gameState = await prisma.gameState.findUnique({
      where: {
        id: gameStateId,
      },
    });

    if (!gameState) {
      console.warn(
        `Game state with ID ${gameStateId} not found for challenge completion.`
      );
      return NextResponse.json(
        { success: false, error: "Game state not found." },
        { status: 404 }
      );
    }

    // Ensure currentDbNode.currentNodeId exists before using in prisma query
    // (This block implies currentNodeId exists for the game state)
    if (!gameState.currentNodeId) {
      console.warn(
        `Game state ${gameStateId} has no current node set for challenge completion.`
      );
      return NextResponse.json(
        { success: false, error: "Game state current node not set." },
        { status: 400 }
      );
    }

    const currentDbNode = await prisma.narrativeNode.findUnique({
      where: { id: gameState.currentNodeId! }, // Use non-null assertion here
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

    if (!currentDbNode) {
      console.error(
        `Narrative node with ID ${gameState.currentNodeId} not found in database for challenge completion.`
      );
      return NextResponse.json(
        { success: false, error: "Current narrative node not found." },
        { status: 500 }
      );
    }

    if (
      !currentDbNode.challengeType ||
      !currentDbNode.challengeIdInternal ||
      currentDbNode.challengeIdInternal !== challengeId
    ) {
      console.warn(
        `Challenge ID ${challengeId} submitted but node ${currentDbNode.id} does not have a matching mini-challenge or challenge data is incomplete.`
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "No active challenge found for this node or challenge data mismatch.",
        },
        { status: 400 }
      );
    }

    const nextNodeId = success
      ? currentDbNode.onSuccessNodeId
      : currentDbNode.onFailureNodeId;

    if (!nextNodeId) {
      console.error(
        `Next node ID (success/failure) not defined for challenge ${challengeId} on node ${currentDbNode.id}.`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Narrative flow error: next node not defined.",
        },
        { status: 500 }
      );
    }

    const nextDbNode = await prisma.narrativeNode.findUnique({
      where: { id: nextNodeId! }, // FIXED: Use non-null assertion for id in where clause
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

    if (!nextDbNode) {
      console.error(
        `Next narrative node with ID ${nextNodeId} (from challenge ${challengeId} result: ${success}) not found in database.`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Next narrative node not found (database consistency error).",
        },
        { status: 500 }
      );
    }

    const updatedGameState = await prisma.gameState.update({
      where: {
        id: gameStateId,
      },
      data: {
        currentNodeId: nextDbNode.id,
      },
    });

    console.log(
      `Game state ${gameStateId} updated to node ${
        nextDbNode.id
      } after challenge ${challengeId} (${success ? "Success" : "Failure"})`
    );

    const nextApiNode: ApiNarrativeNode = {
      id: nextDbNode.id,
      text: nextDbNode.text,
      image: nextDbNode.imageUrl ?? undefined, // FIXED: Ensure it matches ApiNarrativeNode['image']
      choices: nextDbNode.choices.map((c) => ({
        id: c.id,
        text: c.text,
        nextNodeId: c.nextNodeId,
      })),
      miniChallenge:
        nextDbNode.challengeType &&
        nextDbNode.challengeIdInternal &&
        nextDbNode.onSuccessNodeId &&
        nextDbNode.onFailureNodeId
          ? {
              type: nextDbNode.challengeType!,
              challengeId: nextDbNode.challengeIdInternal!,
              onSuccessNodeId: nextDbNode.onSuccessNodeId!,
              onFailureNodeId: nextDbNode.onFailureNodeId!,
            }
          : null,
    };

    return NextResponse.json(
      {
        success: true,
        currentNode: nextApiNode,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error handling mini-challenge result:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error.message ||
          "An unexpected server error occurred while processing challenge result.",
      },
      { status: 500 }
    );
  }
}
