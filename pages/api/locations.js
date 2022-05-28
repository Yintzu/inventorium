import prisma from "../../prisma/client.ts"

export default async function getAllLocations(req, res) {
  try {
    const locations = await prisma.locations.findMany()
    res.status(200).json(locations)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
