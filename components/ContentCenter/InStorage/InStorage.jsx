import style from "./InStorage.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useState } from "react"
import Modal from "../../Modal/Modal"

export default function InStorage({ selectedLocation }) {
  const [modalMode, setModalMode] = useState()

  return (
    <div className={centerStyle["content-center-container"]}>
      <p className={centerStyle["content-center-container-title"]}>I lager</p>
      <div className={style["grid"]}>
        <div className={style["card"]}>
          <p className={style["title"]}>Cisco 24p</p>
          <div className={style["amount-wrapper"]}>
            <p className={style["amount"]}>Antal: </p>
            <div className={style["btn-wrapper"]}>
              <button className={style["decrement"]}>-</button>
              <button className={style["increment"]}>+</button>
            </div>
          </div>
          <div className={style["btn-wrapper"]}>
            <button
              className={style["send"]}
              onClick={() => setModalMode("send")}
            >
              Skicka ➡
            </button>
            <button
              className={style["enable"]}
              onClick={() => setModalMode("enable")}
            >
              Sätt i drift ⬇
            </button>
          </div>
        </div>
      </div>
      {modalMode ? (
        <Modal
          modalMode={modalMode}
          setModalMode={setModalMode}
          selectedLocation={selectedLocation}
        />
      ) : null}
    </div>
  )
}
