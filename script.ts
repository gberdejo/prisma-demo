import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.reglas_call.create({
    data: {
      c2c: "W",
      nombre_call: "WHAT",
      role_id: "264564",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
