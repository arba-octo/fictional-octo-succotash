/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."MoneyOp" AS ENUM ('credit', 'debit');

-- DropIndex
DROP INDEX "public"."User_username_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "username",
ADD COLUMN     "balance" DECIMAL(12,2) NOT NULL DEFAULT 0.00;

-- CreateTable
CREATE TABLE "public"."MoneyHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kind" "public"."MoneyOp" NOT NULL,
    "amount" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MoneyHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MoneyHistory_userId_createdAt_idx" ON "public"."MoneyHistory"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."MoneyHistory" ADD CONSTRAINT "MoneyHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
