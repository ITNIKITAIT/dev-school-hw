import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const a = await prisma.orders.findMany()
    console.log(a)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })