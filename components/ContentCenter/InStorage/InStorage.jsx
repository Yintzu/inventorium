import InStorageCard from "./InStorageCard/InStorageCard"
import centerStyle from "../ContentCenter.module.css"
import style from "./InStorage.module.css"
import AddItem from "./AddItem/AddItem"

export default function InStorage({ itemsForLocation = [] }) {
  if (!Array.isArray(itemsForLocation)) return null

  const arrayUniqueByKey = [
    ...new Map(itemsForLocation.map((item) => [item["name"], item])).values(),
  ]

  return (
    <div className={`${centerStyle["container"]}`}>
      <div className={style["title-wrapper"]}>
        <p className={`${centerStyle["container-title"]} ${style["title"]}`}>
          I lager
        </p>

        <AddItem />
      </div>
      <div className={style["grid"]}>
        {arrayUniqueByKey.map((item) => {
          if (!item.sendto) {
            return (
              <InStorageCard
                key={item.id}
                item={item}
                itemsForLocation={itemsForLocation}
              />
            )
          }
        })}
      </div>
    </div>
  )
}
