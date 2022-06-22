import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useMutation, useQueryClient } from "react-query"
import { putOutOfUse } from "../../../utilities/fetchers"

export default function InUse({ itemsForLocation = [] }) {
  const queryClient = useQueryClient()

  const mutationSettings = {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  }
  const { mutate } = useMutation(putOutOfUse, mutationSettings)

  return (
    <div className={centerStyle["container"]}>
      <p className={centerStyle["container-title"]}>I drift</p>
      <table className={style["table"]}>
        <thead>
          <tr className={style["table-headers"]}>
            <th>Hostname</th>
            <th>Modell</th>
            {/* <th>Serienummer</th> */}
          </tr>
        </thead>
        <tbody className={style["table-body"]}>
          {Array.isArray(itemsForLocation) &&
            itemsForLocation.map((item, i) => {
              if (item.inuse)
                return (
                  <tr className={style["table-row"]} key={i}>
                    <td>Ej implementerat</td>
                    <td className={style["justify-between"]}>
                      <span>{item.name}</span>
                      <button
                        className={style["remove-btn"]}
                        onClick={() => mutate(item.id)}
                      >
                        Ta ur drift
                      </button>
                    </td>
                    {/* <td>FSF94UR9U4</td> */}
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
