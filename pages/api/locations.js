import prisma from "../../services/prisma/client.ts"

export default async function main(req, res) {
  if (req.method === "POST") {
    const jsname = JSON.parse(req.body)
    if (!jsname?.name)
      return res.status(400).json({ message: "Bad user request" })

    try {
      const reply = await prisma.locations.create({
        data: { name: jsname.name },
      })
      res.status(200).json(reply)
    } catch (error) {
      console.error("Error talking to DB: ", error.message)
      res.status(500).json({ error: error.message })
    }
  } else {
    try {
      const locations = await prisma.locations.findMany()
      res.status(200).json(locations)
    } catch (error) {
      console.error("Error talking to DB: ", error.message)
      res.status(500).json({ error: error.message })
    }
  }
}
