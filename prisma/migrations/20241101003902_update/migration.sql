/*
  Warnings:

  - Added the required column `dateOfBith` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastNames` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `names` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "dateOfBith" TEXT NOT NULL,
ADD COLUMN     "lastNames" TEXT NOT NULL,
ADD COLUMN     "names" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
