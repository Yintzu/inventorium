import { useGlobalState } from "../../../state/GlobalStateContext"
import style from "./EditButton.module.css"

export default function EditButton({ item }) {
  const { setModal } = useGlobalState()

  return (
    <button
      className={style["button"]}
      onClick={() => setModal({ mode: "edit", item: item })}
    >
      <img src="/edit.svg" className={style["icon"]} alt="Edit"/>
    </button>
  )
}
