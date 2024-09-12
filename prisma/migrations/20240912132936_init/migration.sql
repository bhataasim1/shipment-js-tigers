-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "long" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "id" SERIAL NOT NULL,
    "hblNo" TEXT NOT NULL,
    "mblNo" TEXT NOT NULL,
    "poRefNo" TEXT NOT NULL,
    "recipt" TEXT NOT NULL,
    "reciptDate" TIMESTAMP(3) NOT NULL,
    "loading" TEXT NOT NULL,
    "loadingDate" TIMESTAMP(3) NOT NULL,
    "discharge" TEXT NOT NULL,
    "dischargeDate" TIMESTAMP(3) NOT NULL,
    "delivery" TEXT NOT NULL,
    "deliveryDate" TIMESTAMP(3) NOT NULL,
    "bookingNo" TEXT NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "bookingStatus" TEXT NOT NULL,
    "sizeType" TEXT NOT NULL,
    "carrier" TEXT NOT NULL,
    "commodity" TEXT NOT NULL,
    "milestone" TEXT NOT NULL,
    "milestoneGroup" TEXT NOT NULL,
    "shipper" TEXT NOT NULL,
    "consignee" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "estimatedTimeOfDeparture" TIMESTAMP(3) NOT NULL,
    "estimatedTimeOfArrival" TIMESTAMP(3) NOT NULL,
    "actualTimeOfDeparture" TIMESTAMP(3) NOT NULL,
    "actualTimeOfArrival" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("id")
);
