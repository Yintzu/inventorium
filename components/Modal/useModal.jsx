import { useRef } from "react"
import style from "./Modal.module.css"
import {
  getLocations,
  postLocation,
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
    case "send":
      const otherLocations = locations.filter(
        (item) => item.name !== selectedLocation
      )
      jsx = (
        <>
          <p className={style["title"]}>Skicka till:</p>
          <select className={style["select"]} ref={selectInputRef}>
            {otherLocations.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
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
    case "enable":
      jsx = (
        <>
          <p className={style["title"]}>Ange hostname:</p>
          <input type="text" className={style["input"]} ref={textInputRef} />
        </>
      )
      fetcher = null
  }

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
      })
      setModalMode(null)
    }
  }

  return [jsx, handleSubmit]
}
