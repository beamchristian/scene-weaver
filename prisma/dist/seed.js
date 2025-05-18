// prisma/seed.ts
import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();
async function main() {
    console.log("Seeding database with initial narrative nodes and choices...");
    // Define your initial narrative nodes
    const nodesData = [
        {
            title: "start_node", // THIS MUST MATCH START_NODE_TITLE in src/app/api/game/start/route.ts
            text: "Welcome to your thrilling adventure! What path will you choose?",
            imageUrl: "/images/placeholder_start.jpg", // Use a placeholder image path
        },
        {
            title: "forest_path_entry",
            text: "You bravely step onto a winding forest path. The trees loom tall.",
            imageUrl: "/images/placeholder_forest.jpg",
        },
        {
            title: "mountain_climb_start",
            text: "A steep mountain trail challenges your resolve. The air is thin.",
            imageUrl: "/images/placeholder_mountain.jpg",
        },
        {
            title: "end_success",
            text: "Congratulations! You reached the end of this path!",
            imageUrl: "/images/placeholder_success.jpg",
        },
        {
            title: "end_failure",
            text: "Your journey ends here...",
            imageUrl: "/images/placeholder_failure.jpg",
        },
        // Add more narrative nodes as your story progresses
    ];
    // --- 1. Create/Upsert NarrativeNodes first ---
    // Upsert ensures that if you run the seed script multiple times,
    // it won't create duplicate nodes based on their unique 'title'.
    const createdNodes = {};
    for (const nodeData of nodesData) {
        const upsertedNode = await prisma.narrativeNode.upsert({
            where: { title: nodeData.title }, // Find by title, assuming titles are unique for specific nodes
            update: {}, // No updates needed if it already exists for this simple seed
            create: nodeData,
        });
        createdNodes[nodeData.title] = upsertedNode.id; // Store the generated ID for later use
        console.log(`Upserted NarrativeNode: ${upsertedNode.title} (ID: ${upsertedNode.id})`);
    }
    // --- 2. Create Choices, referencing the IDs of the NarrativeNodes ---
    // Ensure the sourceNodeId and nextNodeId refer to IDs that were just created above.
    const choicesData = [
        {
            sourceNodeId: createdNodes["start_node"],
            text: "Take the forest path.",
            nextNodeId: createdNodes["forest_path_entry"],
        },
        {
            sourceNodeId: createdNodes["start_node"],
            text: "Ascend the challenging mountain.",
            nextNodeId: createdNodes["mountain_climb_start"],
        },
        {
            sourceNodeId: createdNodes["forest_path_entry"],
            text: "Continue deeper into the forest.",
            nextNodeId: createdNodes["end_success"], // Example path
        },
        {
            sourceNodeId: createdNodes["mountain_climb_start"],
            text: "Attempt to reach the summit.",
            nextNodeId: createdNodes["end_failure"], // Example path
        },
        // Add more choices here to connect your narrative nodes
    ];
    for (const choiceData of choicesData) {
        // For choices, if you plan to re-seed often, you might consider adding
        // a unique constraint to your Choice model (e.g., @@unique([sourceNodeId, text]))
        // and then using upsert here as well to prevent duplicate choices.
        // For now, a simple create is sufficient.
        await prisma.choice.create({
            data: choiceData,
        });
        console.log(`Created Choice: "${choiceData.text}" from node ${choiceData.sourceNodeId}`);
    }
    console.log("Database seeding complete.");
}
// Execute the main seeding function
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
