import { useState } from "react"
import style from "./AddLocation.module.css"

export default function AddLocation() {
  const [showInput, setShowInput] = useState(false)

  const submitHandler = e => {
    e.preventDefault()
    setShowInput(false)
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
          <input type="text" />
          <button type="submit">OK</button>
          <button onClick={cancelHandler}>Avbryt</button>
        </>
      ) : (
        <p className={style["content-left-add-location-text"]}>Lägg till +</p>
      )}
    </form>
  )
}
