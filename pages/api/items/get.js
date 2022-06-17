import prisma from "../../services/prisma/client.ts"

export default async function main(req, res) {
    const jsitem = JSON.parse(req.body)
    if (jsitem != null && jsitem.id != null && jsitem.id != "") {
        try {
            const item = await prisma.user.findFirst({
                where: { id: jsitem.id },
            })
            res.status(200).json(item)
        } catch (error) {
            console.error("Error talking to DB: ", error.message)
            res.status(500).json({ error: error.message })
        }
    }
}