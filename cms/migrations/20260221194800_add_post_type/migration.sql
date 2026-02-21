-- AlterTable
ALTER TABLE "Post" ADD COLUMN "type" TEXT NOT NULL DEFAULT 'POST';

-- AlterTable
ALTER TABLE "Value" DROP COLUMN "emoji";
