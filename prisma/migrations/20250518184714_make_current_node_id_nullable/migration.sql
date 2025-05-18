-- DropForeignKey
ALTER TABLE "GameState" DROP CONSTRAINT "GameState_currentNodeId_fkey";

-- AlterTable
ALTER TABLE "GameState" ALTER COLUMN "currentNodeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GameState" ADD CONSTRAINT "GameState_currentNodeId_fkey" FOREIGN KEY ("currentNodeId") REFERENCES "NarrativeNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;
