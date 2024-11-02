const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // Array de claves musicales
  const songKeys = [
    { name: "Cb" },
    { name: "C" },
    { name: "Db" },
    { name: "D" },
    { name: "Eb" },
    { name: "E" },
    { name: "F" },
    { name: "F#" },
    { name: "Gb" },
    { name: "G" },
    { name: "Ab" },
    { name: "A" },
    { name: "Bb" },
    { name: "B" },
  ];

  // Inserta las claves en la tabla SongKey
  for (const key of songKeys) {
    await prisma.songKey.create({
      data: key,
    });
  }

  console.log("Seed completado con éxito.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
