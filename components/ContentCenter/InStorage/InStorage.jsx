import InStorageCard from "./InStorageCard/InStorageCard"
import centerStyle from "../ContentCenter.module.css"
import style from "./InStorage.module.css"
import AddItem from "./AddItem/AddItem"
import { useMemo } from "react"

export default function InStorage({ itemsForLocation = [] }) {
  if (!Array.isArray(itemsForLocation)) return null

  const sortedItems = useMemo(
    () => [...itemsForLocation].sort((a, b) => (a.name > b.name ? 1 : -1)),
    [itemsForLocation]
  )

  return (
    <div className={`${centerStyle["container"]}`}>
      <div className={style["title-wrapper"]}>
        <p className={`${centerStyle["container-title"]} ${style["title"]}`}>
          I lager
        </p>

        <AddItem />
      </div>
      <table className={style["table"]}>
        <thead>
          <tr className={style["table-headers"]}>
            <th>Modell</th>
            <th>Serienummer</th>
          </tr>
        </thead>
        <tbody className={style["table-body"]}>
          {Array.isArray(sortedItems) &&
            sortedItems.map((item) => {
              if (!item.inuse)
                return <InStorageCard key={item.id} item={item} />
            })}
        </tbody>
      </table>
    </div>
  )
}
