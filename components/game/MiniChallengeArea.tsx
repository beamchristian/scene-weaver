// src/components/game/MiniChallengeArea.tsx
import React from "react";
import { type NarrativeNode } from "@/lib/narrativeStructure";
import { type MiniChallengeType } from "@/lib/types";

// Import your individual mini-challenge components
import QuickTimeEvent from "./mini-challenges/QuickTimeEvent";
import SimplePuzzle from "./mini-challenges/SimplePuzzle";
// Import other challenge components as you create them

interface MiniChallengeAreaProps {
  challenge: NarrativeNode["miniChallenge"];
  onChallengeCompleted: (challengeId: string, success: boolean) => void; // <--- This prop is received
}

const MiniChallengeArea: React.FC<MiniChallengeAreaProps> = ({
  challenge,
  onChallengeCompleted,
}) => {
  // <--- Received here
  if (!challenge) {
    return null;
  }

  const renderChallenge = (type: MiniChallengeType) => {
    switch (type) {
      case "quick_time_event":
        // Make sure onChallengeCompleted is passed down as 'onComplete'
        return (
          <QuickTimeEvent
            challenge={challenge}
            onComplete={onChallengeCompleted}
          />
        ); // <--- Passed down here
      case "simple_puzzle":
        // Make sure onChallengeCompleted is passed down as 'onComplete'
        return (
          <SimplePuzzle
            challenge={challenge}
            onComplete={onChallengeCompleted}
          />
        ); // <--- Passed down here
      // ... other cases
      default:
        return (
          <div className='p-4 bg-gray-100 rounded-lg border border-gray-400'>
            Unknown Challenge Type: {type}
          </div>
        );
    }
  };

  return (
    <div className='mb-6 p-4 bg-gray-50 rounded-lg shadow-inner'>
      <h3 className='text-lg font-semibold mb-3'>Challenge!</h3>
      {renderChallenge(challenge.type)}
    </div>
  );
};

export default MiniChallengeArea;
