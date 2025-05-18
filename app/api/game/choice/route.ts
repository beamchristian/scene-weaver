import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { type MiniChallengeType, type ApiNarrativeNode } from "@/lib/types";

interface ChoiceRequest {
  gameStateId: string;
  choiceId: string;
}

interface ChoiceResponse {
  success: boolean;
  currentNode?: ApiNarrativeNode;
  error?: string;
}

export async function POST(
  request: Request
): Promise<NextResponse<ChoiceResponse>> {
  try {
    const body: ChoiceRequest = await request.json();
    const { gameStateId, choiceId } = body;

    const gameState = await prisma.gameState.findUnique({
      where: { id: gameStateId },
    });

    if (!gameState) {
      console.warn(`Game state with ID ${gameStateId} not found.`);
      return NextResponse.json(
        { success: false, error: "Game state not found." },
        { status: 404 }
      );
    }

    // FIXED: Add check for currentNodeId before using it in query
    if (!gameState.currentNodeId) {
      console.warn(`Game state ${gameStateId} has no current node set.`);
      return NextResponse.json(
        { success: false, error: "Game state current node not set." },
        { status: 400 }
      );
    }

    const selectedChoice = await prisma.choice.findFirst({
      where: {
        id: choiceId,
        sourceNodeId: gameState.currentNodeId!, // FIXED: Use non-null assertion here
      },
      select: {
        nextNodeId: true,
      },
    });

    if (!selectedChoice) {
      console.warn(
        `Choice with ID ${choiceId} not found or not valid for current node ${gameState.currentNodeId}.`
      );
      return NextResponse.json(
        { success: false, error: "Invalid choice selected for current node." },
        { status: 400 }
      );
    }

    const nextNodeId = selectedChoice.nextNodeId;

    const nextDbNode = await prisma.narrativeNode.findUnique({
      where: { id: nextNodeId },
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
        `Next narrative node with ID ${nextNodeId} (from choice ${choiceId}) not found in database.`
      );
      return NextResponse.json(
        {
          success: false,
          error: "Next narrative node not found (database consistency error).",
        },
        { status: 500 }
      );
    }

    await prisma.gameState.update({
      where: { id: gameStateId },
      data: { currentNodeId: nextDbNode.id },
    });

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
      { success: true, currentNode: nextApiNode },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing choice:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected server error occurred.",
      },
      { status: 500 }
    );
  }
}
