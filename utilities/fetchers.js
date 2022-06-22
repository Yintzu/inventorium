//TODO: Error handling
export const getLocations = async () => {
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
  const res = await fetch("/api/items/getforlocation", {
    method: "POST",
    body: JSON.stringify({ location }),
  })
  return await res.json()
}

export const receiveItem = async (id) => {
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
      sendto: Number(selectInput),
      tracking: textInput,
    }),
  })
  return await res.json()
}

export const insertItem = async ({ productid, locationid }) => {
  const res = await fetch("/api/items/insert", {
    method: "POST",
    body: JSON.stringify({
      productid: Number(productid),
      locationid,
    }),
  })
  return await res.json()
}

export const deleteItem = async ({ productid, locationid }) => {
  const res = await fetch("/api/items/delete", {
    method: "DELETE",
    body: JSON.stringify({
      productid,
      locationid,
    }),
  })
  return await res.json()
}

export const getAllProducts = async () => {
  const res = await fetch("/api/products")
  return await res.json()
}

export const putInUse = async ({ productId, locationId }) => {
  const res = await fetch("/api/items/putinuse", {
    method: "POST",
    body: JSON.stringify({
      productid: productId,
      locationid: locationId,
    }),
  })
  return await res.json()
}

export const putOutOfUse = async (itemId) => {
  const res = await fetch("/api/items/outofuse", {
    method: "POST",
    body: JSON.stringify({ id: itemId }),
  })
  return await res.json()
}

export const addProduct = async ({ textInput }) => {
  const res = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify({ name: textInput }),
  })
}
