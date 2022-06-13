export const getLocations = async () => {
  //TODO: Error handling
  const response = await fetch("/api/locations")
  return await response.json()
}
