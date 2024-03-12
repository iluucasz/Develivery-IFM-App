-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "totalPay" TEXT NOT NULL,
    "paid" BOOLEAN NOT NULL,
    "payment" TEXT NOT NULL,
    "userCreator" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_client" (
    "foodId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "food_client_pkey" PRIMARY KEY ("foodId","clientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "food_name_key" ON "food"("name");

-- CreateIndex
CREATE UNIQUE INDEX "client_name_key" ON "client"("name");

-- AddForeignKey
ALTER TABLE "food" ADD CONSTRAINT "food_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_client" ADD CONSTRAINT "food_client_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "food_client" ADD CONSTRAINT "food_client_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
