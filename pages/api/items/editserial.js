import prisma from "../../../services/prisma/client.ts"

export default async function main(req, res) {
  const jsserial = JSON.parse(req.body)
  if (jsserial != null && jsserial.serial != null) {
  try {
    const item = await prisma.items.update({
        where: { id: body.id },
        data: { serial: jsserial.serial },
      })
    res.status(200).json(item)
  } catch (error) {
    console.error("Error talking to DB: ", error.message)
    res.status(500).json({ error: error.message })
  }
}
}
