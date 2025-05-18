// src/components/game/mini-challenges/SimplePuzzle.tsx
import React from "react";
import { type NarrativeNode } from "@/lib/narrativeStructure";
import Button from "@/components/Button";

interface MiniChallengeProps {
  challenge: NarrativeNode["miniChallenge"];
  onComplete: (challengeId: string, success: boolean) => void;
}

const SimplePuzzle: React.FC<MiniChallengeProps> = ({
  challenge,
  onComplete,
}) => {
  if (!challenge || !challenge.challengeId) {
    console.error("SimplePuzzle received invalid challenge data.");
    return <div className='text-red-500'>Challenge Error</div>;
  }

  // In a real puzzle, you'd have game logic, state, user interaction, etc.
  // For now, simulate completion.

  const handleSimulateCompletion = (success: boolean) => {
    onComplete(challenge.challengeId!, success);
  };

  return (
    <div className='flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-inner'>
      <p className='text-lg font-semibold'>Simple Puzzle Placeholder</p>
      <p className='text-gray-700'>
        Imagine a simple tile puzzle or riddle here!
      </p>
      <div className='flex space-x-4'>
        {/* Simulate Success Button */}
        <Button onClick={() => handleSimulateCompletion(true)}>
          Simulate Solve
        </Button>
        {/* Simulate Failure Button */}
        <Button
          onClick={() => handleSimulateCompletion(false)}
          className='bg-red-600 hover:bg-red-700'
        >
          Simulate Give Up
        </Button>
      </div>
    </div>
  );
};

export default SimplePuzzle;
