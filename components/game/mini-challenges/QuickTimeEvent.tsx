// src/components/game/mini-challenges/QuickTimeEvent.tsx
import React from "react";
import { type NarrativeNode } from "@/lib/narrativeStructure";
import Button from "@/components/Button";

interface MiniChallengeProps {
  challenge: NarrativeNode["miniChallenge"];
  onComplete: (challengeId: string, success: boolean) => void; // <--- This prop
}

const QuickTimeEvent: React.FC<MiniChallengeProps> = ({
  challenge,
  onComplete,
}) => {
  if (!challenge || !challenge.challengeId) {
    console.error("QuickTimeEvent received invalid challenge data.");
    return <div className='text-red-500'>Challenge Error</div>;
  }

  const handleSimulateCompletion = (success: boolean) => {
    // Make sure this line is calling the onComplete prop with the correct arguments
    onComplete(challenge.challengeId!, success); // <--- Calling the prop here
  };

  return (
    <div className='flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-inner'>
      <p className='text-lg font-semibold'>Quick Time Event Placeholder</p>
      <p className='text-gray-700'>Imagine a bar moving here! Click fast!</p>
      <div className='flex space-x-4'>
        <Button onClick={() => handleSimulateCompletion(true)}>
          Simulate Success
        </Button>
        <Button
          onClick={() => handleSimulateCompletion(false)}
          className='bg-red-600 hover:bg-red-700'
        >
          Simulate Failure
        </Button>
      </div>
    </div>
  );
};

export default QuickTimeEvent;
