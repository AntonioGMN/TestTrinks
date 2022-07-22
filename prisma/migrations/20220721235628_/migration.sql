/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `process` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "process_number_key" ON "process"("number");
