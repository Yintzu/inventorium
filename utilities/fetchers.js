export const getLocations = async () => {
  //TODO: Error handling
  const res = await fetch("/api/locations")
  return await res.json()
}

export const postLocation = async name => {
  const res = await fetch("/api/locations", {
    method: "POST",
    body: JSON.stringify({ name }),
  })
  return await res.json()
}

export const getItemsForLocation = async location => {
  const res = await fetch("/api/items/getForLocation", {
    method: "POST",
    body: JSON.stringify({ location }),
  })
  return await res.json()
}
