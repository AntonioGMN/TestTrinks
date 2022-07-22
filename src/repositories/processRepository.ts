import prisma from "../database.js";

async function getActive() {
    return prisma.process.findMany(
        {
            where: { 
                activity: true
            }
        }
    )
}