import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

async function main() {
  const results2 = await prisma.reglasCall.upsert({
    where: {
      id: 48,
    },
    create: {
      c2c: "WWEEEEEEES",
      nombre_call: "WHATT",
      role_id: "264564",
    },
    update: {
      c2c: "WWWWWWE",
    },
  });

  console.log("results2: ", results2);

  return;

  const user = await prisma.reglasCall.create({
    data: {
      c2c: "W",
      nombre_call: "WHAT",
      role_id: "264564",
    },
  });

  console.log(user);

  const results = await prisma.reglasCall.update({
    where: {
      id: user.id,
    },
    data: {
      c2c: "WWF",
    },
    select: {
      id: true,
      c2c: true,
    },
  });

  console.log("results: ", results);

  const listLeads = await prisma.leads.findFirst({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      orden_id: true,
    },
  });

  const list = await prisma.reglasCall.findMany({
    orderBy: {
      id: "desc",
    },
  });

  // console.dir(list, { depth: null });
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
