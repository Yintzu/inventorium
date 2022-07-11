import { useEffect, useRef } from "react"
import style from "./Modal.module.css"
import {
  addProduct,
  editSerial,
  getLocations,
  postLocation,
  putInUse,
  sendItem,
} from "../../utilities/fetchers.js"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useGlobalState } from "../../state/GlobalStateContext"

export const useModal = (item) => {
  const queryClient = useQueryClient()
  const { data: locations } = useQuery("locations", getLocations)
  const { modalMode, setModalMode, selectedLocation } = useGlobalState()

  const textInputRef = useRef()
  const selectInputRef = useRef()

  let jsx, fetcher

  switch (modalMode) {
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
            defaultValue={item.serial}
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
        itemId: item?.id,
        productId: item?.productid,
        locationId: selectedLocation?.id,
      })
      setModalMode(null)
    }
  }

  return [jsx, handleSubmit]
}
