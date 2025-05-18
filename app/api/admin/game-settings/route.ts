// src/app/api/admin/game-settings/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const settings = await prisma.gameSetting.findUnique({
      where: { settingName: "global_game_settings" },
      select: {
        startNodeId: true,
      },
    });

    return NextResponse.json(settings || { startNodeId: null });
  } catch (error) {
    console.error("BACKEND GET Error: Failed to fetch game settings:", error); // Update this log
    return NextResponse.json(
      { message: "Failed to fetch game settings" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: Request) {
  try {
    const { startNodeId } = await req.json();

    const updatedSettings = await prisma.gameSetting.upsert({
      where: { settingName: "global_game_settings" },
      update: { startNodeId },
      create: {
        settingName: "global_game_settings",
        startNodeId,
      },
    });

    return NextResponse.json(updatedSettings);
  } catch (error) {
    console.error("BACKEND PUT Error: Failed to update game settings:", error); // Update this log
    return NextResponse.json(
      { message: "Failed to update game settings" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
