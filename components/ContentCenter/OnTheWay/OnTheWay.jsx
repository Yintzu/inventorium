import style from "./OnTheWay.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function OnTheWay() {
  return (
    <div className={centerStyle["content-center-container"]}>
      <p className={centerStyle["content-center-container-title"]}>
        På väg till
      </p>
      <div className={style["ontheway-grid"]}>
        <div className={style["ontheway-card"]}>
          <p>Cisco 48p</p>
          <p>Tracking: 989789986</p>
          <p>Sent from: WG1</p>
          <button className={style["ontheway-hasarrived-btn"]}>
            Har ankommit
          </button>
        </div>
      </div>
    </div>
  )
}
