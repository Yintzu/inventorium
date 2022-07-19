import { useEffect, useRef } from "react"
import style from "./Modal.module.css"
import {
  addProduct,
  editSerial,
  getLocations,
  postLocation,
  sendItem,
} from "../../utilities/fetchers.js"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useGlobalState } from "../../state/GlobalStateContext"

export const useModal = () => {
  const queryClient = useQueryClient()
  const { data: locations } = useQuery("locations", getLocations)
  const { modal, setModal, selectedLocation, setSelectedItems } =
    useGlobalState()

  const textInputRef = useRef()
  const selectInputRef = useRef()

  let jsx, fetcher

  switch (modal.mode) {
    case "addLocation":
      jsx = (
        <>
          <p className={style["title"]}>Namn på ny plats:</p>
          <input type="text" className={style["input"]} ref={textInputRef} />
        </>
      )
      fetcher = postLocation
      break
    case "addProduct":
      jsx = (
        <>
          <p className={style["title"]}>Namn på ny produkt:</p>
          <input type="text" className={style["input"]} ref={textInputRef} />
        </>
      )
      fetcher = addProduct
      break
    case "send":
      const otherLocations = locations.filter(
        (item) => item.id !== selectedLocation.id
      )
      jsx = (
        <>
          <p className={style["title"]}>Skicka till:</p>
          <select className={style["select"]} ref={selectInputRef}>
            {otherLocations.map((location) => (
              <option value={location.id} key={location.id}>
                {location.name}
              </option>
            ))}
          </select>
          <label htmlFor="tracking">Tracking</label>
          <input
            type="text"
            className={style["input"]}
            ref={textInputRef}
            id="tracking"
          />
        </>
      )
      fetcher = sendItem
      break
    case "edit":
      jsx = (
        <>
          <p className={style["title"]}>Ändra serienummer:</p>
          <input
            type="text"
            className={style["input"]}
            defaultValue={modal.item.serial}
            ref={textInputRef}
          />
        </>
      )
      fetcher = editSerial
  }

  useEffect(() => {
    textInputRef.current.focus()
  }, [])

  const { mutate } = useMutation(fetcher, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (textInputRef.current.value) {
      mutate({
        textInput: textInputRef.current.value,
        selectInput: selectInputRef.current?.value,
        itemId: modal.item?.id || modal.item,
        productId: modal.item?.productid,
        locationId: selectedLocation?.id,
      })
      if (modal.mode === "send") setSelectedItems([])
      setModal({ mode: null, item: null })
    }
  }

  return [jsx, handleSubmit]
}
