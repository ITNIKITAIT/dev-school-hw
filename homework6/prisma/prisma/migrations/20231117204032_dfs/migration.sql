/*
  Warnings:

  - The `subjects` column on the `Student` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "subjects",
ADD COLUMN     "subjects" TEXT[];
