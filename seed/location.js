const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const locations = [
  {
    location: "YANTIAN, CHINA",
    lat: 22.5590503,
    long: 114.2324407
  },
  {
    location: "LONG BEACH, CA",
    lat: 33.7701,
    long: -118.1937
  },
  {
    location: "SHANGHAI, CHINA",
    lat: 31.2304,
    long: 121.4737
  },
  {
    location: "LOS ANGELES, CA",
    lat: 34.0522,
    long: -118.2437
  },
  {
    location: "NINGBO, CHINA",
    lat: 29.8683,
    long: 121.544
  },
  {
    location: "SEATTLE, WA",
    lat: 47.6062,
    long: -122.3321
  },
  {
    location: "DALIAN, CHINA",
    lat: 38.914,
    long: 121.6147
  },
  {
    location: "OAKLAND, CA",
    lat: 37.8044,
    long: -122.2711
  },
  {
    location: "QINGDAO, CHINA",
    lat: 36.0671,
    long: 120.3826
  },
  {
    location: "HOUSTON, TX",
    lat: 29.7604,
    long: -95.3698
  },
  {
    location: "TIANJIN, CHINA",
    lat: 39.0842,
    long: 117.2006
  },
  {
    location: "NEW YORK, NY",
    lat: 40.7128,
    long: -74.006
  },
  {
    location: "XIAMEN, CHINA",
    lat: 24.4798,
    long: 118.0894
  },
  {
    location: "MIAMI, FL",
    lat: 25.7617,
    long: -80.1918
  },
  {
    location: "GUANGZHOU, CHINA",
    lat: 23.1291,
    long: 113.2644
  },
  {
    location: "CHARLESTON, SC",
    lat: 32.7765,
    long: -79.9311
  },
  {
    location: "SHENZHEN, CHINA",
    lat: 22.5431,
    long: 114.0579
  },
  {
    location: "SAVANNAH, GA",
    lat: 32.0809,
    long: -81.0912
  },
  {
    location: "BEIJING, CHINA",
    lat: 39.9042,
    long: 116.4074
  },
  {
    location: "NORFOLK, VA",
    lat: 36.8508,
    long: -76.2859
  }
];



async function main() {
  for (const location of locations) {
    await prisma.location.create({
      data: location,
    });
  }
  console.log("Data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
