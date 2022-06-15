import { useRef, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { postLocation } from "../../../utilities/fetchers"
import style from "./AddLocation.module.css"

export default function AddLocation() {
  const [showInput, setShowInput] = useState(false)
  const inputRef = useRef()
  const queryClient = useQueryClient()

  const { mutate } = useMutation(postLocation, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const submitHandler = e => {
    e.preventDefault()
    setShowInput(false)
    mutate(inputRef.current.value)
  }

  const cancelHandler = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowInput(false)
  }

  return (
    <form
      onSubmit={submitHandler}
      className={style["content-left-add-location-wrapper"]}
      onClick={showInput ? null : () => setShowInput(true)}
    >
      {showInput ? (
        <>
          <input type="text" ref={inputRef} />
          <button type="submit">OK</button>
          <button onClick={cancelHandler}>Avbryt</button>
        </>
      ) : (
        <p className={style["content-left-add-location-text"]}>Lägg till +</p>
      )}
    </form>
  )
}
