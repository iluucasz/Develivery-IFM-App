-- DropForeignKey
ALTER TABLE "food" DROP CONSTRAINT "food_userId_fkey";

-- DropForeignKey
ALTER TABLE "food_client" DROP CONSTRAINT "food_client_clientId_fkey";

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_client" ADD CONSTRAINT "food_client_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
