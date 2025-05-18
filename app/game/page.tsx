// src/app/game/page.tsx
"use client";

import { useState, useEffect } from "react";
import NarrativeDisplay from "@/components/game/NarrativeDisplay";
import Choices from "@/components/game/Choices";
import MiniChallengeArea from "@/components/game/MiniChallengeArea";
import { type NarrativeNode, type Choice } from "@/lib/narrativeStructure";

// Define GameSettings interface to type the response from the admin settings API
interface GameSettings {
  startNodeId: string | null;
}

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

  useEffect(() => {
    const startGame = async () => {
      setIsLoading(true);
      setFatalError(null);

      try {
        // --- STEP 1: Fetch the global game settings to get the startNodeId ---
        const settingsResponse = await fetch("/api/admin/game-settings", {
          cache: "no-store", // Ensure we get the very latest setting from the server
        });

        if (!settingsResponse.ok) {
          const errorData = await settingsResponse.json(); // Assuming it returns JSON for errors
          const errorMessage =
            errorData.error ||
            `Failed to fetch game settings: HTTP error! status: ${settingsResponse.status}`;
          console.error(
            "startGame - Error fetching game settings:",
            errorMessage
          );
          setFatalError(`Failed to load game settings: ${errorMessage}`);
          setIsLoading(false);
          return;
        }
        const settingsData: GameSettings = await settingsResponse.json();

        if (!settingsData.startNodeId) {
          setFatalError(
            "Game start node is not set in admin settings. Please configure it in the Admin Panel."
          );
          setIsLoading(false);
          return;
        }

        const initialNodeId = settingsData.startNodeId;

        const response = await fetch("/api/game/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ initialNodeId: initialNodeId }), // <-- Pass the fetched ID here
        });

        if (!response.ok) {
          const errorData: GameStateResponse = await response.json();
          const errorMessage =
            errorData.error || `HTTP error! status: ${response.status}`;
          console.error(
            "Game Start API returned non-OK status:",
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
          console.error("startGame - API indicated failure:", errorMessage);
          setFatalError(`Failed to start game: ${errorMessage}`);
          setGameState(null);
        }
      } catch (error: any) {
        console.error("startGame - Error during fetch operation:", error);
        const errorMessage = error.message || "A network error occurred.";
        setFatalError(`Failed to start game: ${errorMessage}`);
        setGameState(null);
      } finally {
        setIsLoading(false);
      }
    };

    startGame();
  }, []); // Empty dependency array means this runs once on component mount

  const handleChoiceSelected = async (choiceId: string) => {
    if (!currentGameId || isLoading) {
      console.warn(
        "handleChoiceSelected - Cannot make a choice: no current game ID or still loading."
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
          "handleChoiceSelected - API returned non-OK status:",
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
        console.error(
          "handleChoiceSelected - API indicated failure:",
          errorMessage
        );
      }
    } catch (error: any) {
      console.error("handleChoiceSelected - Error sending choice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChallengeCompleted = async (
    challengeId: string,
    success: boolean
  ) => {
    if (!currentGameId || isLoading) {
      console.warn(
        "handleChallengeCompleted - Cannot complete challenge: no current game ID or still loading."
      );
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/game/challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
          "handleChallengeCompleted - API returned non-OK status:",
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
        console.error(
          "handleChallengeCompleted - API indicated failure:",
          errorMessage
        );
      }
    } catch (error: any) {
      console.error(
        "handleChallengeCompleted - Error sending challenge result:",
        error
      );
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

        {!isLoading && currentNode.miniChallenge && (
          <MiniChallengeArea
            challenge={currentNode.miniChallenge}
            onChallengeCompleted={handleChallengeCompleted}
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
