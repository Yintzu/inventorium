import { useMutation, useQueryClient } from "react-query"
import { putOutOfUse } from "../../../../utilities/fetchers"
import EditButton from "../../EditButton/EditButton"
import style from "../InUse.module.css"

export default function InUseCard({ item }) {
  const queryClient = useQueryClient()
  const { mutate } = useMutation(putOutOfUse, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  return (
    <tr className={style["table-row"]}>
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
}
