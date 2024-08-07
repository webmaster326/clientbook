-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "accountOwner" BOOLEAN NOT NULL DEFAULT false,
    "locale" TEXT,
    "collaborator" BOOLEAN DEFAULT false,
    "emailVerified" BOOLEAN DEFAULT false
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientid" TEXT NOT NULL,
    "clientsecret" TEXT NOT NULL
);

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

-- CreateTable
CREATE TABLE "UserTokens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "tokenExpiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

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
CREATE UNIQUE INDEX "UserTokens_email_key" ON "UserTokens"("email");

-- CreateIndex
CREATE INDEX "UserTokens_email_idx" ON "UserTokens"("email");

-- CreateIndex
CREATE INDEX "UploadFiles_entryId_idx" ON "UploadFiles"("entryId");
