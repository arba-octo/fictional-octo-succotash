/*
  Warnings:

  - Made the column `model` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Job" ALTER COLUMN "model" SET NOT NULL;
