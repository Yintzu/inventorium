import style from "./InStorage.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function InStorage() {
  return (
    <div className={centerStyle["content-center-container"]}>
      <p className={centerStyle["content-center-container-title"]}>I lager</p>
      <div className={style["ontheway-grid"]}>
        <div className={style["ontheway-card"]}>
          <p>Cisco 24p</p>
        </div>
      </div>
    </div>
  )
}
