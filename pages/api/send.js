import prisma from "../../services/prisma/client.ts"

export default async function main(req, res) {
  const { sendto, tracking, itemid } = JSON.parse(req.body)

  if (!sendto || !itemid || !tracking)
    return res.status(400).json({ message: "Bad user request" })

  try {
    if (Array.isArray(itemid)) {
      const arrayOfIds = itemid.map((id) => ({ id }))

      console.log("arrayOfIds", arrayOfIds)

      const shipping = await prisma.shipping.create({
        data: {
          sent: new Date(),
          sendto,
          tracking,
        },
      })
      const items = await prisma.items.updateMany({
        where: {
          OR: arrayOfIds,
        },
        data: {
          shippingid: shipping.id,
        },
      })
      console.log("shipping", shipping)
      console.log("items", items)
      return res.status(200).json({ shipping, items })
    } else {
      const reply = await prisma.$queryRaw`with rows as(
        INSERT INTO shipping (sent, sendto, tracking)
                VALUES (CURRENT_DATE, ${sendto}, ${tracking}) RETURNING id)
                UPDATE items
                SET shippingid = (SELECT * FROM rows)
                WHERE id = ${itemid}`
      res.status(200).json(reply)
    }
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
