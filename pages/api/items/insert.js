import prisma from "../../../services/prisma/client.ts"

export default async function main(req, res) {
  const jsitem = JSON.parse(req.body)
  if (jsitem != null) {
    try {
      const reply = await prisma.items.create({
        data: {
          productid: jsitem.productid,
          locationid: jsitem.locationid,
          inuse: false,
        },
      })
      return res.status(200).json(reply)
    } catch (error) {
      console.error("Error talking to DB: ", error.message)
      return res.status(500).json({ error: error.message })
    }
  }
  return res.status(400).json({ message: "Bad user request" })
}
