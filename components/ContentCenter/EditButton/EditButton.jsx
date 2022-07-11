import { useGlobalState } from "../../../state/GlobalStateContext"
import style from "./EditButton.module.css"

export default function EditButton({ handleOpenModal }) {
  const { setModalMode } = useGlobalState()

  return (
    <button className={style["button"]} onClick={() => handleOpenModal("edit")}>
      <img src="/edit.svg" className={style["icon"]} />
    </button>
  )
}
