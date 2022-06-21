import { useGlobalState } from "../../../../state/GlobalStateContext"
import Modal from "../../../Modal/Modal"
import style from "../InStorage.module.css"

export default function InStorageCard({ item, itemsForLocation }) {
  const { modalMode, setModalMode } = useGlobalState()

  return (
    <div className={style["card"]}>
      <p className={style["card-title"]}>{item.name}</p>
      <div className={style["amount-wrapper"]}>
        <p className={style["amount"]}>
          Antal:{" "}
          {
            itemsForLocation.filter(
              (locationItem) => locationItem.name === item.name
            ).length
          }
        </p>
        <div className={style["btn-wrapper"]}>
          <button className={style["decrement"]}>-</button>
          <button className={style["increment"]}>+</button>
        </div>
      </div>
      <div className={style["btn-wrapper"]}>
        <button className={style["send"]} onClick={() => setModalMode("send")}>
          Skicka ➡
        </button>
        <button
          className={style["enable"]}
          onClick={() => setModalMode("enable")}
        >
          Sätt i drift ⬇
        </button>
      </div>
      {["send", "enable"].includes(modalMode) && <Modal item={item} />}
    </div>
  )
}
