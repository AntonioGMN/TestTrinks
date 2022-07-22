/*
  Warnings:

  - You are about to drop the column `active` on the `process` table. All the data in the column will be lost.
  - Added the required column `activity` to the `process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "process" DROP COLUMN "active",
ADD COLUMN     "activity" BOOLEAN NOT NULL;
