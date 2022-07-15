import { useMutation, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { deleteItem, putInUse } from "../../../../utilities/fetchers"
import EditButton from "../../EditButton/EditButton"
import style from "../InStorage.module.css"

export default function InStorageCard({ item }) {
  const queryClient = useQueryClient()
  const { setModal } = useGlobalState()

  const mutationSettings = {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  }

  const { mutate: decrement } = useMutation(deleteItem, mutationSettings)
  const { mutate: enable } = useMutation(putInUse, mutationSettings)

  return (
    <tr className={style["table-row"]}>
      <td className={style["name-cell"]}>{item.name}</td>
      <td>
        <div className={style["justify-between"]}>
          <span>{item.serial}</span>

          <div className={style["btn-wrapper"]}>
            <button
              className={style["send"]}
              onClick={() => setModal({ mode: "send", item: item })}
            >
              Skicka ➡
            </button>
            <button
              className={style["enable"]}
              onClick={() =>
                enable({
                  itemId: item.id,
                })
              }
            >
              Sätt i drift ⬇
            </button>
            <EditButton item={item}/>
          </div>
        </div>
      </td>
    </tr>
  )
}
