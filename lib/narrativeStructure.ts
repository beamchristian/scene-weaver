// src/lib/narrativeStructure.ts
// Define TypeScript types for our narrative elements
import { type MiniChallengeType } from "./types";

export interface Choice {
  id: string; // Unique ID for the choice
  text: string; // The text the player sees for this choice
  nextNodeId: string; // The ID of the narrative node this choice leads to
  // Optional: Add conditions or effects later if needed
  // condition?: { [key: string]: any };
  // effect?: { [key: string]: any };
}

export interface NarrativeNode {
  id: string; // Unique ID for the narrative node
  text: string; // The story text for this node (can include Markdown)
  image?: string; // Optional: Path to a background image or illustration
  choices?: Choice[]; // Array of choices available at this node
  miniChallenge?: {
    // Optional: Details if this node triggers a mini-challenge
    type: MiniChallengeType; // The type of mini-challenge
    challengeId: string; // A unique ID for this specific challenge instance
    onSuccessNodeId: string; // Node to go to if challenge is successful
    onFailureNodeId: string; // Node to go to if challenge fails
    // Optional: Add parameters for the mini-challenge later
    // params?: { [key: string]: any };
  };
  // Optional: Add effects that happen when entering this node
  // entryEffect?: { [key: string]: any };
}

// REMOVED: export const narrativeStructure: NarrativeNode[] = [...];
// REMOVED: export const findNodeById = (nodeId: string): NarrativeNode | undefined => { ... };
