/*
  Warnings:

  - You are about to drop the column `title` on the `Prompt` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Prompt_title_key";

-- AlterTable
ALTER TABLE "public"."Prompt" DROP COLUMN "title";
