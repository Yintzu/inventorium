import { createContext, useContext } from "react"
import { useQuery } from "react-query"

const DataContext = createContext()
export const useDataContext = () => useContext(DataContext)

export default function DataProvider({ children }) {
  const { data: locations } = useQuery("locations", () =>
    fetch("/api/locations").then(res => res.json())
  )

  return (
    <DataContext.Provider
      value={{
        locations,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
