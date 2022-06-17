import prisma from "../../services/prisma/client.ts"
import date from datetime

export default async function main(req, res) {
    const jssend = JSON.parse(req.body)
    if (jssend != null) {
        try {
            await prisma.$queryRaw`with rows as(
                INSERT INTO shipping (sent, sendto, tracking)
                VALUES ('${date.today()}', ${jssend.sendto}, ${jssend.tracking}) RETURNING id)
                UPDATE items
                SET shippingid = (SELECT * FROM rows)
                WHERE id = ${jssend.itemid}`
            res.status(200).json(reply)
        } catch (error) {
            console.error("Error talking to DB: ", error.message)
            res.status(500).json({ error: error.message })
        }
    }
}