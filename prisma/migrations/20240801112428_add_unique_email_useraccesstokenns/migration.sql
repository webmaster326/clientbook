/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `UserTokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserTokens_email_key" ON "UserTokens"("email");
