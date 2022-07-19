import { useMutation, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { putInUse } from "../../../../utilities/fetchers"
import EditButton from "../../EditButton/EditButton"
import style from "../InStorage.module.css"

export default function InStorageCard({ item }) {
  const { setSelectedItems } = useGlobalState()
  const queryClient = useQueryClient()

  const mutationSettings = {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  }

  const { mutate: enable } = useMutation(putInUse, mutationSettings)

  const handleSelect = (e) => {
    if (e.target.checked) setSelectedItems((prev) => [...prev, item.id])
    else setSelectedItems((prev) => prev.filter((id) => item.id !== id))
  }

  return (
    <tr className={style["table-row"]}>
      <td className={style["name-cell"]}>{item.name}</td>
      <td>
        <div className={style["justify-between"]}>
          <span>{item.serial}</span>

          <div className={style["btn-wrapper"]}>
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
            <EditButton item={item} />
            <label className={style["checkbox-wrapper"]}>
              <input
                type="checkbox"
                className={style["checkbox-input"]}
                onChange={handleSelect}
              />
              <span className={style["checkbox"]}></span>
            </label>
          </div>
        </div>
      </td>
    </tr>
  )
}
