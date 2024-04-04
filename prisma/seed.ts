import { prisma } from "../src/lib/prisma"

async function seed() {
  await prisma.event.create({
    data: {
      id: "217606f3-6d12-4d38-89e6-e0328512e90d",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Event for passionate developers!",
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log("Database seeded!")
  prisma.$disconnect()
})