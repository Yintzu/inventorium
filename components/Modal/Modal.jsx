import { useGlobalState } from "../../state/GlobalStateContext"
import style from "./Modal.module.css"
import { useModal } from "./useModal"

export default function Modal() {
  const { setModal } = useGlobalState()
  const [jsx, handleSubmit] = useModal()

  const handleOverlayClick = (e) => {
    if (e.target.className.includes("overlay"))
      setModal({ mode: null, item: null })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setModal({ mode: null, item: null })
  }

  return (
    <div className={style["overlay"]} onClick={handleOverlayClick}>
      <div className={style["box"]}>
        <form className={style["container"]} onSubmit={handleSubmit}>
          {jsx}

          <div className={style["btn-wrapper"]}>
            <button
              className={style["cancel"]}
              onClick={handleCancel}
              type="button"
            >
              Avbryt
            </button>
            <button className={style["confirm"]} type="submit">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
