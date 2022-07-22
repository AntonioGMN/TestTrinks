import prisma from "../database.js";

export async function getActive() {
    return prisma.process.findMany({
      where: {activity: true}
    });
}