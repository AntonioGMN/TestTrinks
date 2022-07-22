import prisma from "../database.js";

export async function findByName(name: string) {
    return prisma.client.findFirst({
      where: {name}
    });
}
