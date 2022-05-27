import prisma from "../../prisma/client.ts"

export default async function locations(req, res) {
  const locations = await prisma.locations.findMany()
  res.status(200).json(locations)
}
