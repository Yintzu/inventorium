import prisma from "../../../services/prisma/client.ts"

export default async function main(req, res) {
  const body = JSON.parse(req.body)
  if (!body?.location)
    return res.status(400).json({ message: "Bad user request" })

  try {
    const items =
      await prisma.$queryRaw`SELECT i.id, p.name, i.locationid, s.sendto, i.inuse, s.tracking, i.productid, i.hostname, i.serial FROM items i
        JOIN products p ON p.id = i.productid
        LEFT JOIN shipping s ON i.shippingid = s.id
        WHERE s.sendto = ${body.location} OR i.locationid = ${body.location}`

    res.status(200).json(items)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
