import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext()

export const useDataContext = () => useContext(DataContext)

export default function DataProvider({ children }) {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch("/api/locations")
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <DataContext.Provider
      value={{
        locations,
        setLocations,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
