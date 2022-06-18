import InStorageCard from "./InStorageCard/InStorageCard"
import centerStyle from "../ContentCenter.module.css"
import style from "./InStorage.module.css"

export default function InStorage({ itemsForLocation = [] }) {
  return (
    <div className={`${centerStyle["container"]}`}>
      <div className={style["title-wrapper"]}>
        <p className={`${centerStyle["container-title"]} ${style["title"]}`}>
          I lager
        </p>
        <span className={style["add-btn"]}>+</span>
      </div>
      <div className={style["grid"]}>
        {Array.isArray(itemsForLocation) &&
          itemsForLocation.map((item) => {
            if (!item.sendto) {
              return <InStorageCard key={item.id} item={item} />
            }
          })}
      </div>
    </div>
  )
}
