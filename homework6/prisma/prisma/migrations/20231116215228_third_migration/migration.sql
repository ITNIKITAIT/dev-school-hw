/*
  Warnings:

  - You are about to drop the `NewUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "NewUser";

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "second_name" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passport" (
    "id" SERIAL NOT NULL,
    "passport_number" TEXT,
    "expiration_date" TEXT,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "Passport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Passport_passport_number_key" ON "Passport"("passport_number");

-- CreateIndex
CREATE UNIQUE INDEX "Passport_person_id_key" ON "Passport"("person_id");

-- AddForeignKey
ALTER TABLE "Passport" ADD CONSTRAINT "Passport_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
