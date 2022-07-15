import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useMutation, useQueryClient } from "react-query"
import { putOutOfUse } from "../../../utilities/fetchers"
import EditButton from "../EditButton/EditButton"
import { useMemo } from "react"

export default function InUse({ itemsForLocation = [] }) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(putOutOfUse, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const sortedItems = useMemo(
    () => [...itemsForLocation].sort((a, b) => (a.name > b.name ? 1 : -1)),
    [itemsForLocation]
  )

  return (
    <div className={centerStyle["container"]}>
      <p className={centerStyle["container-title"]}>I drift</p>
      <table className={style["table"]}>
        <thead>
          <tr className={style["table-headers"]}>
            <th>Modell</th>
            <th>Serienummer</th>
          </tr>
        </thead>
        <tbody className={style["table-body"]}>
          {Array.isArray(sortedItems) &&
            sortedItems.map((item, i) => {
              if (item.inuse)
                return (
                  <tr className={style["table-row"]} key={i}>
                    <td className={style["name-cell"]}>{item.name}</td>
                    <td>
                      <div className={style["justify-between"]}>
                        <span>{item.serial}</span>
                        <div className={style["button-wrapper"]}>
                          <button
                            className={style["remove-btn"]}
                            onClick={() => mutate(item.id)}
                          >
                            Ta ur drift
                          </button>
                          <EditButton item={item} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
