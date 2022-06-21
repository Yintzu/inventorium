import prisma from "../../services/prisma/client.ts"

export default async function main(req, res) {
  const jsitem = JSON.parse(req.body)
  if (!jsitem?.id) return res.status(400).json({ message: "Bad user request" })

  try {
    const reply = await prisma.$executeRaw`UPDATE items
    SET locationid = (SELECT sendto FROM shipping
    WHERE id = (SELECT shippingid FROM items WHERE id = ${jsitem.id})), shippingid = NULL
    WHERE id = ${jsitem.id}`
    res.status(200).json(reply)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
