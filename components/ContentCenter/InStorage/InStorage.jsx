import { useGlobalState } from "../../../state/GlobalStateContext"
import centerStyle from "../ContentCenter.module.css"
import style from "./InStorage.module.css"

export default function InStorage({ itemsForLocation }) {
  const { setModalMode } = useGlobalState()

  return (
    <div className={`${centerStyle["container"]}`}>
      <div className={style["title-wrapper"]}>
        <p className={`${centerStyle["container-title"]} ${style["title"]}`}>
          I lager
        </p>
        <span className={style["add-btn"]}>+</span>
      </div>
      <div className={style["grid"]}>
        {itemsForLocation?.map(item => {
          if (!item.sendto) {
            return (
              <div className={style["card"]} key={item.id}>
                <p className={style["card-title"]}>{item.name}</p>
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
            )
          }
        })}
      </div>
    </div>
  )
}
