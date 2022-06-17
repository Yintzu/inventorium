import prisma from "../../services/prisma/client.ts"

export default async function getItemsForLocation(req, res) {
    try {
        const items = await prisma.$queryRaw`SELECT i.id, p.name, i.location, s.sendto, FROM items i
        JOIN products p ON p.id = i.product
        LEFT JOIN shipping s ON i.id = s.item
        WHERE s.sendto = '1' OR i.location = '1'`

        res.status(200).json(items)
    } catch (error) {
        console.error("Error talking to DB: ", error.message)
        res.status(500).json({ error: error.message })
    }
}