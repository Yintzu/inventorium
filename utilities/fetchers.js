export const getLocations = async () => {
  //TODO: Error handling
  const res = await fetch("/api/locations")
  return await res.json()
}

export const postLocation = async ({ textInput }) => {
  const res = await fetch("/api/locations", {
    method: "POST",
    body: JSON.stringify({ name: textInput }),
  })
  return await res.json()
}

export const getItemsForLocation = async (location) => {
  const res = await fetch("/api/items/getForLocation", {
    method: "POST",
    body: JSON.stringify({ location }),
  })
  return await res.json()
}

export const recieveItem = async (id) => {
  const res = await fetch("/api/receive", {
    method: "POST",
    body: JSON.stringify({ id }),
  })
  return await res.json()
}

export const sendItem = async ({ itemId, textInput, selectInput }) => {
  const res = await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify({
      itemid: itemId,
      sendto: selectInput,
      tracking: textInput,
    }),
  })
  return await res.json()
}
