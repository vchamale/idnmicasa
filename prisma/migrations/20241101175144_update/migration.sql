/*
  Warnings:

  - You are about to drop the column `dateOfBith` on the `Member` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" DROP COLUMN "dateOfBith",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL;
