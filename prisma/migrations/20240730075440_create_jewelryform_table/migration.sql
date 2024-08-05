/*
  Warnings:

  - The primary key for the `Settings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Settings` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- CreateTable
CREATE TABLE "JewelryDesignForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "designOptions" TEXT NOT NULL,
    "metalOptions" TEXT NOT NULL,
    "preferredPriceRange" TEXT NOT NULL,
    "preferredContactMethod" TEXT NOT NULL,
    "availabilityOption" TEXT NOT NULL,
    "designNotes" TEXT,
    "fileUpload" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientid" TEXT NOT NULL,
    "clientsecret" TEXT NOT NULL
);
INSERT INTO "new_Settings" ("clientid", "clientsecret", "id") SELECT "clientid", "clientsecret", "id" FROM "Settings";
DROP TABLE "Settings";
ALTER TABLE "new_Settings" RENAME TO "Settings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "JewelryDesignForm_emailAddress_key" ON "JewelryDesignForm"("emailAddress");
