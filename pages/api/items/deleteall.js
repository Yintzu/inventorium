import prisma from "../../../services/prisma/client.ts"

export default async function main(req, res) {
    const body = JSON.parse(req.body)

    try {
        const user = await prisma.items.delete({
            where: { serial: 'DELETE' },
        })
        res.status(200).json(items)
    } catch (error) {
        console.error("Error talking to DB: ", error.message)
        res.status(500).json({ error: error.message })
    }
}
