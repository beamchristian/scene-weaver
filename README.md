# Scene Weaver - An Interactive Story with Mini-Challenges

"Scene Weaver" is a web-based interactive narrative game built with **Next.js**, **TypeScript**, and a **PostgreSQL** database (using **Prisma**). The game allows players to progress through a story by making choices and completing simple, graphical mini-challenges embedded within the narrative.

This project is designed to showcase full-stack development skills, focusing on:

- **Frontend development** with React and Next.js.
- **Backend API routes** with Next.js.
- **Database interaction** using Prisma and PostgreSQL.
- **Managing application state and logic** across the full stack.

---

## How It Works

The core game loop operates as follows:

- **Frontend** (`src/app/game/page.tsx`): When the game page loads or a player makes a choice/completes a challenge, the frontend sends a request to a backend API route.
- **Backend API Route** (`src/app/api/game/.../route.ts`): The API route receives the request, loads the current game state from the database using Prisma, and processes the player's action.
  - For **starting a new game** (`POST /api/game/start`), the route now intelligently manages game states: if a game state **already exists** for the user, it will **reset that game state** to the initial node, clearing progress and score; otherwise, it will **create a brand new one**. This ensures each user typically has a single active game session.
  - For other actions (handling a choice or processing a mini-challenge result), it processes the player's action and updates the game state accordingly.
- **Narrative Logic** (`src/lib/narrativeStructure.ts`): The backend uses the defined `narrativeStructure` to determine the ID of the next narrative node based on the current node and the player's action.
- **Database Update (Prisma)**: The backend updates the player's game state in the PostgreSQL database (via Prisma) to record the new current node ID.
- **Backend Response**: The API route fetches the data for the next narrative node from the `narrativeStructure` and sends this data back to the frontend.
- **Frontend Update**: The frontend receives the data for the next node and updates the UI to display the new narrative text, image, and either choices or a mini-challenge.

The player's progress is saved in the database, allowing for saving and loading game sessions (though the load functionality is not fully implemented in the initial skeleton).

---

## Project Structure

- `/src/app`: Contains the App Router pages and API routes.
  - `/src/app/game/page.tsx`: The main frontend component for the game screen.
  - `/src/app/api/game`: Contains the backend API routes for game logic (start, choice, challenge).
- `/src/components`: Reusable React components.
  - `/src/components/game`: Components specific to the game UI (NarrativeDisplay, Choices, MiniChallengeArea).
  - `/src/components/game/mini-challenges`: Individual mini-challenge components.
- `/src/lib`: Utility functions and configuration.
  - `/src/lib/db.ts`: Prisma Client setup for database interaction.
  - `/src/lib/narrativeStructure.ts`: Where the story is defined. Contains the `narrativeStructure` array and helper functions.
  - `/src/lib/types.ts`: TypeScript type definitions for narrative elements and mini-challenges.
- `/prisma`: Contains the Prisma schema (`schema.prisma`) and database migrations.
- `/public`: Static assets like images.

---

## Adding to the Story

The game's narrative is defined in the `src/lib/narrativeStructure.ts` file. It consists of an array of `NarrativeNode` objects.

### 1. Understanding NarrativeNode

Each `NarrativeNode` object represents a scene or moment in the story and has the following structure (defined by the `NarrativeNode` TypeScript interface in `src/lib/narrativeStructure.ts`):

```typescript
export interface NarrativeNode {
  id: string; // Unique ID for this node (e.g., 'start', 'forest_path_1', 'clearing')
  text: string; // The story text for this node
  image?: string; // Optional: URL or path to an image for this scene
  choices?: Choice[]; // Optional: Array of choices leading to other nodes
  miniChallenge?: {
    // Optional: Defines a mini-challenge at this node
    type: MiniChallengeType; // Type of challenge (defined in src/lib/types.ts)
    challengeId: string; // Unique ID for this challenge instance
    onSuccessNodeId: string; // Node ID if challenge is successful
    onFailureNodeId: string; // Node ID if challenge fails
  };
  // ... other optional properties you might add (e.g., entryEffect)
}
```
