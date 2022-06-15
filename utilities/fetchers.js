export const getLocations = async () => {
  //TODO: Error handling
  const response = await fetch("/api/locations")
  return await response.json()
}

export const postLocation = async name => {
  const res = await fetch("/api/locations", {
    method: "POST",
    body: JSON.stringify({ name }),
  })
  console.log('res', res)
  return await res.json()
}
