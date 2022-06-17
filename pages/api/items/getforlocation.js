import prisma from "../../../services/prisma/client.ts"

export default async function getItemsForLocation(req, res) {
  const body = JSON.parse(req.body)

  try {
    const items =
      await prisma.$queryRaw`SELECT i.id, p.name, i.location, s.sendto FROM items i
        JOIN products p ON p.id = i.product
        LEFT JOIN shipping s ON i.id = s.item
        WHERE s.sendto = ${body.location} OR i.location = ${body.location}`

    res.status(200).json(items)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
