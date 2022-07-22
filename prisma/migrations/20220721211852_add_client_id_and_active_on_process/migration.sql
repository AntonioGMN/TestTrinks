/*
  Warnings:

  - You are about to drop the column `type` on the `process` table. All the data in the column will be lost.
  - Added the required column `active` to the `process` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "process" DROP COLUMN "type",
ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "clientId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
