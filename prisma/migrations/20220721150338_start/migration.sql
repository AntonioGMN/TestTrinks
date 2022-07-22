-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "start" DATE NOT NULL,
    "type" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_name_key" ON "client"("name");
