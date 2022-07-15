import prisma from "../../services/prisma/client.ts"

export default async function main(req, res) {
  if (req.method === "POST") {
    const jsname = JSON.parse(req.body)
    if (jsname != null && jsname.name != null && jsname.name != "") {
      try {
        const reply = await prisma.products.create({
          data: { name: jsname.name },
        })
        res.status(200).json(reply)
      } catch (error) {
        console.error("Error talking to DB: ", error.message)
        res.status(500).json({ error: error.message })
      }
    }
  } else {
    try {
      const products = await prisma.products.findMany()
      res.status(200).json(products)
    } catch (error) {
      console.error("Error talking to DB: ", error.message)
      res.status(500).json({ error: error.message })
    }
  }
}