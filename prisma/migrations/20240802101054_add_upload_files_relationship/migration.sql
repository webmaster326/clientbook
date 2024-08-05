-- CreateTable
CREATE TABLE "UploadFiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entryId" INTEGER NOT NULL,
    "filename" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UploadFiles_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "JewelryDesignForm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "UploadFiles_entryId_idx" ON "UploadFiles"("entryId");
