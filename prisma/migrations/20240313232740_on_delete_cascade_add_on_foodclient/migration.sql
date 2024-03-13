-- DropForeignKey
ALTER TABLE "food_client" DROP CONSTRAINT "food_client_clientId_fkey";

-- AddForeignKey
ALTER TABLE "food_client" ADD CONSTRAINT "food_client_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
