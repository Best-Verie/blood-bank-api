/*
  Warnings:

  - Added the required column `hospitalId` to the `DonationEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'VOLUNTEER';

-- AlterTable
ALTER TABLE "DonationEvent" ADD COLUMN     "hospitalId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DonationEvent" ADD CONSTRAINT "DonationEvent_hospitalId_fkey" FOREIGN KEY ("hospitalId") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
