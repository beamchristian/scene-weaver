import { PrismaClient } from "@/app/generated/prisma";

// Declare a global variable for PrismaClient to prevent multiple instances in development
// This is a common pattern in Next.js to avoid performance issues during hot-reloading
// In a production environment, Next.js handles this differently, but this pattern is safe
// and recommended for development with hot-reloading.
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a new PrismaClient instance if one doesn't already exist globally.
// If in development, reuse the existing global instance.
const prisma =
  global.prisma ||
  new PrismaClient({
    // Optional: Uncomment the line below to log database queries to the console during development.
    // This can be helpful for debugging.
    // log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

// In development, assign the newly created PrismaClient instance to the global scope
// to ensure it's reused on subsequent hot-reloads.
if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

// Export the PrismaClient instance.
// This is the object you will import and use in your API routes and server components
// to interact with your database.
export default prisma;
