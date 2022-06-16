import { createContext, useContext, useState } from "react"

const GlobalStateContext = createContext()
export const useGlobalState = () => useContext(GlobalStateContext)

export default function GlobalStateProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [showSidebarMobile, setShowSidebarMobile] = useState(false)
  const [modalMode, setModalMode] = useState(null)

  return (
    <GlobalStateContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        showSidebarMobile,
        setShowSidebarMobile,
        modalMode,
        setModalMode,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
