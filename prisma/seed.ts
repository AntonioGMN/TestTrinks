import prisma from "../src/database.js"

async function main() {
  await prisma.client.upsert({
    where: {  name: "Empresa A", },
    update: {},
    create: {
      name: "Empresa A",
      state: "Rio de Janeiro",
    },
  })

  await prisma.client.upsert({
    where: {  name: "Empresa B", },
    update: {},
    create: {
      name: "Empresa B",
      state: "Rio de Janeiro",
    },
  })

  await prisma.process.upsert({
    where: {  number: "00001CIVELRJ"},
    update: {},
    create: {
      number: "00001CIVELRJ",
      state: "Rio de Janeiro",
      start: '2007-10-10T00:00:00-00:00',
      activity: true,
      value: 20000000,
      clientId: 1
    },
  })

  await prisma.process.upsert({
    where: {  number: "00002CIVELSP"},
    update: {},
    create: {
      number: "00002CIVELSP",
      state: "São Paulo",
      start: '2007-10-20T00:00:00-00:00',
      activity: true,
      value: 10000000,
      clientId: 1
    },
  })
    
  await prisma.process.upsert({
    where: {  number: "00003TRABMG"},
    update: {},
    create: {
      number: "00003TRABMG",
      state: "Minas Gerais",
      start: '2007-10-30T00:00:00-00:00',
      activity: false,
      value: 1000000,
      clientId: 1
    },
  })

  await prisma.process.upsert({
    where: {  number: "00004CIVELRJ"},
    update: {},
    create: {
      number: "00004CIVELRJ",
      state: "Rio de Janeiro",
      start: '2007-11-10T00:00:00-00:00',
      activity: false,
      value: 2000000,
      clientId: 1
    },
  })

  await prisma.process.upsert({
    where: {  number: "00005CIVELSP"},
    update: {},
    create: {
      number: "00005CIVELSP",
      state: "São Paulo",
      start: '2007-11-15T00:00:00-00:00',
      activity: true,
      value: 3500000,
      clientId: 1
    },
  })

  await prisma.process.upsert({
    where: {  number: "00006CIVELRJ"},
    update: {},
    create: {
      number: "00006CIVELRJ",
      state: "Rio de Janeiro",
      start: '2007-05-01T00:00:00-00:00',
      activity: true,
      value: 2000000,
      clientId: 2
    },
  })

  await prisma.process.upsert({
    where: {  number: "00007CIVELRJ"},
    update: {},
    create: {
      number: "00007CIVELRJ",
      state: "Rio de Janeiro",
      start: '2007-06-02T00:00:00-00:00',
      activity: true,
      value: 70000000,
      clientId: 2
    },
  })

  await prisma.process.upsert({
    where: {  number: "00008CIVELSP"},
    update: {},
    create: {
      number: "00008CIVELSP",
      state: "São Paulo",
      start: '2007-07-03T00:00:00-00:00',
      activity: false,
      value: 50000,
      clientId: 2
    },
  })
    
  await prisma.process.upsert({
    where: {  number: "00009CIVELSP"},
    update: {},
    create: {
      number: "00009CIVELSP",
      state: "São Paulo",
      start: '2007-08-04T00:00:00-00:00',
      activity: true,
      value: 3200000,
      clientId: 2
    },
  })

  await prisma.process.upsert({
    where: {  number: "00010TRABAM"},
    update: {},
    create: {
      number: "00010TRABAM",
      state: "AMAZONAS",
      start: '2007-09-05T00:00:00-00:00',
      activity: false,
      value: 100000,
      clientId: 2
    },
  })
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("seed was executed")
  });