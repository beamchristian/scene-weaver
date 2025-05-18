-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GameState" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "currentScore" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "currentNodeId" TEXT NOT NULL,
    "startNodeId" TEXT,

    CONSTRAINT "GameState_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NarrativeNode" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "challengeType" TEXT,
    "challengeIdInternal" TEXT,
    "onSuccessNodeId" TEXT,
    "onFailureNodeId" TEXT,

    CONSTRAINT "NarrativeNode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sourceNodeId" TEXT NOT NULL,
    "nextNodeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GameState_userId_key" ON "GameState"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "NarrativeNode_title_key" ON "NarrativeNode"("title");

-- CreateIndex
CREATE INDEX "Choice_sourceNodeId_idx" ON "Choice"("sourceNodeId");

-- CreateIndex
CREATE INDEX "Choice_nextNodeId_idx" ON "Choice"("nextNodeId");

-- AddForeignKey
ALTER TABLE "GameState" ADD CONSTRAINT "GameState_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameState" ADD CONSTRAINT "GameState_currentNodeId_fkey" FOREIGN KEY ("currentNodeId") REFERENCES "NarrativeNode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameState" ADD CONSTRAINT "GameState_startNodeId_fkey" FOREIGN KEY ("startNodeId") REFERENCES "NarrativeNode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_sourceNodeId_fkey" FOREIGN KEY ("sourceNodeId") REFERENCES "NarrativeNode"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_nextNodeId_fkey" FOREIGN KEY ("nextNodeId") REFERENCES "NarrativeNode"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
