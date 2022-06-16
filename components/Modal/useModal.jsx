import { useRef } from "react"
import style from "./Modal.module.css"
import { getLocations, postLocation } from "../../utilities/fetchers.js"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useGlobalState } from "../../state/GlobalStateContext"

export const useModal = () => {
  const queryClient = useQueryClient()
  const { data: locations } = useQuery("locations", getLocations)
  const { modalMode, setModalMode, selectedLocation } = useGlobalState()
  const inputRef = useRef()
  let jsx, fetcher

  switch (modalMode) {
    case "addLocation":
      jsx = (
        <>
          <p className={style["title"]}>Namn på ny plats:</p>
          <input type="text" className={style["input"]} ref={inputRef} />
        </>
      )
      fetcher = postLocation
      break
    case "send":
      const otherLocations = locations.filter(
        item => item.name !== selectedLocation
      )
      jsx = (
        <>
          <p className={style["title"]}>Skicka till:</p>
          <select className={style["select"]}>
            {otherLocations.map(item => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </>
      )
      fetcher = null
      break
    case "enable":
      jsx = (
        <>
          <p className={style["title"]}>Ange hostname:</p>
          <input type="text" className={style["input"]} ref={inputRef} />
        </>
      )
      fetcher = null
  }

  const { mutate } = useMutation(fetcher, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (inputRef.current.value) {
      mutate(inputRef.current.value)
      setModalMode(null)
    }
  }

  return [jsx, handleSubmit]
}
