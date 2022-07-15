import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useMemo } from "react"
import InUseCard from "./InUseCard/InUseCard"

export default function InUse({ itemsForLocation = [] }) {
  if (!Array.isArray(itemsForLocation)) return <p>Error retrieving items</p>

  const sortedItems = useMemo(
    () => [...itemsForLocation].sort((a, b) => (a.name > b.name ? 1 : -1)),
    [itemsForLocation]
  )

  const renderList = () => {
    let list = []
    sortedItems.forEach((item) => {
      if (item.inuse) list.push(<InUseCard key={item.id} item={item} />)
    })

    if (!list.length) return null
    return (
      <table className={style["table"]}>
        <thead>
          <tr className={style["table-headers"]}>
            <th>Modell</th>
            <th>Serienummer</th>
          </tr>
        </thead>
        <tbody className={style["table-body"]}>{list}</tbody>
      </table>
    )
  }

  return (
    <div className={centerStyle["container"]}>
      <p className={centerStyle["container-title"]}>I drift</p>
      {renderList()}
    </div>
  )
}
