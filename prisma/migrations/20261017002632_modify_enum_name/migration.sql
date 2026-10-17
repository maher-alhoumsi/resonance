/*
  Warnings:

  - The `category` column on the `Voice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "VoiceCategory" AS ENUM ('AUDIOBOOK', 'CONVERSATIONAL', 'CUSTOMER_SERVICE', 'GENERAL', 'NARRATIVE', 'CHARACTERS', 'MEDITATION', 'MOTIVATIONAL', 'PODCAST', 'ADVERTISING', 'VOICEOVER', 'CORPORATE');

-- AlterTable
ALTER TABLE "Voice" DROP COLUMN "category",
ADD COLUMN     "category" "VoiceCategory" NOT NULL DEFAULT 'GENERAL';

-- DropEnum
DROP TYPE "VoiceGategory";
