import { createContext, useContext, useState } from "react"

const GlobalStateContext = createContext()
export const useGlobalState = () => useContext(GlobalStateContext)

export default function GlobalStateProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [selectedItems, setSelectedItems] = useState([])
  const [showSidebarMobile, setShowSidebarMobile] = useState(false)
  const [modal, setModal] = useState({ mode: null, item: null })

  return (
    <GlobalStateContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        selectedItems,
        setSelectedItems,
        showSidebarMobile,
        setShowSidebarMobile,
        modal,
        setModal,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
