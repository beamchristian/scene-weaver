// src/app/game/page.tsx
"use client";

import { useState, useEffect } from "react";
import NarrativeDisplay from "@/components/game/NarrativeDisplay";
import Choices from "@/components/game/Choices";
import MiniChallengeArea from "@/components/game/MiniChallengeArea";
import { type NarrativeNode, type Choice } from "@/lib/narrativeStructure";
import { type MiniChallengeType } from "@/lib/types";

interface GameStateResponse {
  success: boolean;
  gameStateId?: string;
  currentNode?: NarrativeNode;
  error?: string;
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameStateResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentGameId, setCurrentGameId] = useState<string | null>(null);
  const [fatalError, setFatalError] = useState<string | null>(null);

  // ... useEffect for startGame (unchanged) ...
  useEffect(() => {
    const startGame = async () => {
      setIsLoading(true);
      setFatalError(null);

      try {
        const response = await fetch("/api/game/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          const errorData: GameStateResponse = await response.json();
          const errorMessage =
            errorData.error || `HTTP error! status: ${response.status}`;
          console.error(
            "API returned non-OK status:",
            response.status,
            errorMessage
          );
          setFatalError(`Failed to start game: ${errorMessage}`);
          setGameState(null);
          return;
        }

        const data: GameStateResponse = await response.json();

        if (data.success && data.currentNode && data.gameStateId) {
          setGameState(data);
          setCurrentGameId(data.gameStateId);
        } else {
          const errorMessage =
            data.error ||
            "API indicated failure without specific error message.";
          console.error("API indicated failure:", errorMessage);
          setFatalError(`Failed to start game: ${errorMessage}`);
          setGameState(null);
        }
      } catch (error: any) {
        console.error("Error during fetch operation:", error);
        const errorMessage = error.message || "A network error occurred.";
        setFatalError(`Failed to start game: ${errorMessage}`);
        setGameState(null);
      } finally {
        setIsLoading(false);
      }
    };

    startGame();
  }, []);

  // ... handleChoiceSelected function (unchanged) ...
  const handleChoiceSelected = async (choiceId: string) => {
    if (!currentGameId || isLoading) {
      console.warn(
        "Cannot make a choice: no current game ID or still loading."
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/game/choice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameStateId: currentGameId,
          choiceId: choiceId,
        }),
      });

      if (!response.ok) {
        const errorData: GameStateResponse = await response.json();
        const errorMessage =
          errorData.error || `HTTP error! status: ${response.status}`;
        console.error(
          "Choice API returned non-OK status:",
          response.status,
          errorMessage
        );
        setIsLoading(false);
        return;
      }

      const data: GameStateResponse = await response.json();

      if (data.success && data.currentNode) {
        setGameState(data);
      } else {
        const errorMessage =
          data.error ||
          "Choice API indicated failure without specific error message.";
        console.error("Choice API indicated failure:", errorMessage);
      }
    } catch (error: any) {
      console.error("Error sending choice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Make sure this function is correctly defined and calls the fetch API
  const handleChallengeCompleted = async (
    challengeId: string,
    success: boolean
  ) => {
    // <--- This function
    if (!currentGameId || isLoading) {
      console.warn(
        "Cannot complete challenge: no current game ID or still loading."
      );
      return;
    }

    setIsLoading(true);

    try {
      // Make sure this fetch call is correct
      const response = await fetch("/api/game/challenge", {
        // <--- Calling the correct API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Make sure the body includes gameStateId, challengeId, and success
        body: JSON.stringify({
          gameStateId: currentGameId,
          challengeId: challengeId,
          success: success,
        }),
      });

      if (!response.ok) {
        const errorData: GameStateResponse = await response.json();
        const errorMessage =
          errorData.error || `HTTP error! status: ${response.status}`;
        console.error(
          "Challenge API returned non-OK status:",
          response.status,
          errorMessage
        );
        setIsLoading(false);
        return;
      }

      const data: GameStateResponse = await response.json();

      if (data.success && data.currentNode) {
        setGameState(data);
      } else {
        const errorMessage =
          data.error ||
          "Challenge API indicated failure without specific error message.";
        console.error("Challenge API indicated failure:", errorMessage);
      }
    } catch (error: any) {
      console.error("Error sending challenge result:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Render Logic ---

  if (isLoading && !gameState && !fatalError) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        Loading game...
      </div>
    );
  }

  if (fatalError) {
    return (
      <div className='flex items-center justify-center min-h-screen text-red-500 text-center p-4'>
        {fatalError}
      </div>
    );
  }

  if (gameState && gameState.success && gameState.currentNode) {
    const currentNode = gameState.currentNode;

    return (
      <div className='container mx-auto p-4 max-w-2xl'>
        <NarrativeDisplay
          text={currentNode.text}
          imageUrl={currentNode.image}
        />

        {!isLoading &&
          currentNode.choices &&
          currentNode.choices.length > 0 && (
            <Choices
              choices={currentNode.choices}
              onChoiceSelected={handleChoiceSelected}
            />
          )}

        {/* Make sure handleChallengeCompleted is passed to MiniChallengeArea */}
        {!isLoading && currentNode.miniChallenge && (
          <MiniChallengeArea
            challenge={currentNode.miniChallenge}
            onChallengeCompleted={handleChallengeCompleted} // <--- Passed down here
          />
        )}

        {isLoading && (
          <div className='mt-4 text-center text-gray-600'>Processing...</div>
        )}
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      Something went wrong loading the game.
    </div>
  );
}
