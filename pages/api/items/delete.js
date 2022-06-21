import prisma from "../../../services/prisma/client.ts"

export default async function getItemsForLocation(req, res) {
  const body = JSON.parse(req.body)

  try {
    const items =
      await prisma.$queryRaw`WITH rows AS (
        SELECT id FROM items
      WHERE productid = ${body.productid} AND locationid = ${body.locationid}
        LIMIT 1)
      DELETE FROM items
      WHERE id IN (SELECT id FROM rows)`
    res.status(200).json(items)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
