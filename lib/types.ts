// src/lib/types.ts

// Define a union type for the different types of mini-challenges you plan to have
export type MiniChallengeType =
  | "quick_time_event"
  | "simple_puzzle"
  | "memory_game"
  | "target_click";
// Add more types here as you create new mini-challenges

// Define an interface for the expected response data,
// matching the structure your frontend expects (NarrativeNode + choices)
export interface ApiNarrativeNode {
  id: string;
  text: string;
  // CHANGED: Now explicitly string | undefined, so null imageUrl from Prisma will be mapped to undefined
  image: string | undefined;
  choices?: { id: string; text: string; nextNodeId: string }[];
  // Allows miniChallenge to be the object, or explicitly null, or undefined if absent.
  miniChallenge:
    | {
        type: string;
        challengeId: string;
        onSuccessNodeId: string;
        onFailureNodeId: string;
      }
    | null
    | undefined;
}

export interface NarrativeNode {
  id: string;
  title: string;
  text: string;
  imageUrl: string | null;
  choices: Array<{ id: string; text: string; nextNodeId: string }>;
  challengeType: string | null;
  challengeIdInternal: string | null;
  onSuccessNodeId: string | null;
  onFailureNodeId: string | null;
}
