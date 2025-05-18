// src/app/api/game/start/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { ApiNarrativeNode } from "@/lib/types";

// Removed the hardcoded INITIAL_NODE_TITLE as it will now come from the request body

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
    // --- 1. Read the initialNodeId from the request body ---
    const body = await request.json();
    const initialNodeIdFromRequest: string | undefined = body.initialNodeId;

    if (!initialNodeIdFromRequest) {
      console.error("initialNodeId not provided in the request body.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing initialNodeId in request. Please ensure admin settings are configured.",
        },
        { status: 400 }
      );
    }

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

    // --- 2. Find the narrative node using the ID from the request ---
    const initialDbNode = await prisma.narrativeNode.findUnique({
      where: { id: initialNodeIdFromRequest }, // <-- Use the ID from the frontend
      include: {
        choices: {
          select: {
            id: true,
            text: true,
            nextNodeId: true,
          },
        },
        // Include miniChallenge fields if they are separate or nested models
        // Ensure these match your Prisma schema for the NarrativeNode
        // Example: If miniChallenge is a separate relation
        // miniChallenge: true,
      },
    });

    // You also need to explicitly select the challenge fields if they are directly on NarrativeNode
    // This part should be updated to match your Prisma schema for NarrativeNode challenge fields
    const selectedFields = {
      id: true,
      text: true,
      imageUrl: true, // Assuming this is the field for image
      // Add other direct fields you need from NarrativeNode
      challengeType: true,
      challengeIdInternal: true,
      onSuccessNodeId: true,
      onFailureNodeId: true,
      choices: {
        select: {
          id: true,
          text: true,
          nextNodeId: true,
        },
      },
    };

    const initialDbNodeWithAllFields = await prisma.narrativeNode.findUnique({
      where: { id: initialNodeIdFromRequest },
      select: selectedFields,
    });

    if (!initialDbNodeWithAllFields) {
      console.error(
        `Initial narrative node with ID '${initialNodeIdFromRequest}' not found in database.`
      );
      return NextResponse.json(
        {
          success: false,
          error: `Game configuration error: Start node with ID '${initialNodeIdFromRequest}' not found.`,
        },
        { status: 404 }
      );
    }

    // Map DB node to the structure expected by the frontend
    const initialApiNode: ApiNarrativeNode = {
      id: initialDbNodeWithAllFields.id,
      text: initialDbNodeWithAllFields.text,
      image: initialDbNodeWithAllFields.imageUrl ?? undefined, // Use imageUrl from DB
      choices: initialDbNodeWithAllFields.choices.map((c) => ({
        id: c.id,
        text: c.text,
        nextNodeId: c.nextNodeId,
      })),
      miniChallenge:
        initialDbNodeWithAllFields.challengeType &&
        initialDbNodeWithAllFields.challengeIdInternal &&
        initialDbNodeWithAllFields.onSuccessNodeId &&
        initialDbNodeWithAllFields.onFailureNodeId
          ? {
              type: initialDbNodeWithAllFields.challengeType, // No `!` needed if you've already checked for truthiness
              challengeId: initialDbNodeWithAllFields.challengeIdInternal,
              onSuccessNodeId: initialDbNodeWithAllFields.onSuccessNodeId,
              onFailureNodeId: initialDbNodeWithAllFields.onFailureNodeId,
            }
          : undefined,
    };

    // Create or update a GameState entry
    const newGameState = await prisma.gameState.upsert({
      where: { userId: userId },
      update: {
        currentNodeId: initialDbNodeWithAllFields.id, // Set to the node from settings
        currentScore: 0,
        stateData: {},
      },
      create: {
        userId: userId,
        currentNodeId: initialDbNodeWithAllFields.id,
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
