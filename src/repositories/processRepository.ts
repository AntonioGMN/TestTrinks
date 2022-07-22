import prisma from "../database.js";

export async function getActive() {
  return prisma.process.findMany({
    where: {activity: true}
  });
}

export async function getByClienteIdAndState(clientId: number, state) {
  return prisma.process.findMany({
    where: {clientId,state}
  })
}

export async function getAll() {
  return prisma.process.findMany()
}

export async function getTRAB() {
    return prisma.process.findMany({
    where: {number: {
      contains: 'TRAB'
    }}
  })
}