/*
  Warnings:

  - You are about to drop the column `provider` on the `Job` table. All the data in the column will be lost.
  - The `aspect` column on the `Job` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `promptId` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Job" DROP CONSTRAINT "Job_promptId_fkey";

-- AlterTable
ALTER TABLE "public"."Job" DROP COLUMN "provider",
DROP COLUMN "aspect",
ADD COLUMN     "aspect" VARCHAR(10),
ALTER COLUMN "promptId" SET NOT NULL;

-- DropEnum
DROP TYPE "public"."AspectRatio";

-- AddForeignKey
ALTER TABLE "public"."Job" ADD CONSTRAINT "Job_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "public"."Prompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
