import { useGlobalState } from "../../../state/GlobalStateContext"
import style from "./EditButton.module.css"

export default function EditButton() {
  const { setModalMode } = useGlobalState()

  return (
    <button className={style["button"]} onClick={() => setModalMode("edit")}>
      <img src="/edit.svg" className={style["icon"]} />
    </button>
  )
}
