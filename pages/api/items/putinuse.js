import prisma from "../../../services/prisma/client.ts"

export default async function main(req, res) {
  const body = JSON.parse(req.body)

  try {
    const item = await prisma.$queryRaw`WITH rows AS (
        SELECT id FROM items
      WHERE productid = ${body.productid} AND locationid = ${body.locationid} AND inuse = false
        LIMIT 1)
      UPDATE items
      SET inuse = true
      WHERE id IN (SELECT id FROM rows)`
    res.status(200).json(item)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
