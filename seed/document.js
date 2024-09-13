const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const documents = [
  {
    title: "Packing List",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-25"),
    updatedAt: new Date("2024-07-18")
  },
  {
    title: "Bill of Lading",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-24"),
    updatedAt: new Date("2024-07-17")
  },
  {
    title: "Commercial Invoice",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-23"),
    updatedAt: new Date("2024-07-18")
  },
  {
    title: "Certificate of Origin",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-22"),
    updatedAt: new Date("2024-07-17")
  },
  {
    title: "Packing List",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-21"),
    updatedAt: new Date("2024-07-17")
  },
  {
    title: "Bill of Lading 2",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-20"),
    updatedAt: new Date("2024-07-17")
  },
  {
    title: "Commercial Invoice 2",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-19"),
    updatedAt: new Date(new Date("2024-07-17"))
  },
  {
    title: "Certificate of Origin 2",
    description: "sea job document (M13JHD)",
    createdAt: new Date("2024-06-18"),
    updatedAt: new Date("2024-07-17")
  }
];


async function main() {
  for (const document of documents) {
    await prisma.document.create({
      data: document,
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
