import style from "./OnTheWay.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function OnTheWay() {
  return (
    <div className={style["container-wrapper"]}>
      <div className={centerStyle["container"]}>
        <p className={centerStyle["container-title"]}>På väg till</p>
        <div className={style["grid"]}>
          <div className={style["card"]}>
            <p>Cisco 48p</p>
            <p>Tracking: 989789986</p>
            <p>Sent from: WG1</p>
            <button className={style["hasarrived-btn"]}>Har ankommit</button>
          </div>
        </div>
      </div>
      <div className={centerStyle["container"]}>
        <div>
          <p className={centerStyle["container-title"]}>På väg från</p>
        </div>
      </div>
    </div>
  )
}
