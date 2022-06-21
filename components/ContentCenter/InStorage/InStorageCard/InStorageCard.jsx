import { useMutation, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { deleteItem, insertItem } from "../../../../utilities/fetchers"
import Modal from "../../../Modal/Modal"
import style from "../InStorage.module.css"

export default function InStorageCard({ item, itemsForLocation }) {
  const queryClient = useQueryClient()
  const { modalMode, setModalMode, selectedLocation } = useGlobalState()

  const mutationSettings = {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  }
  const { mutate: increment } = useMutation(insertItem, mutationSettings)
  const { mutate: decrement } = useMutation(deleteItem, mutationSettings)

  return (
    <div className={style["card"]}>
      <p className={style["card-title"]}>{item.name}</p>
      <div className={style["amount-wrapper"]}>
        <p className={style["amount"]}>
          Antal:{" "}
          {
            itemsForLocation.filter(
              (locationItem) => locationItem.name === item.name
            ).length
          }
        </p>
        <div className={style["btn-wrapper"]}>
          <button
            className={style["decrement"]}
            onClick={() =>
              decrement({
                locationid: selectedLocation.id,
                productid: item.productid,
              })
            }
          >
            -
          </button>
          <button
            className={style["increment"]}
            onClick={() =>
              increment({
                location: selectedLocation.id,
                product: item.productid,
              })
            }
          >
            +
          </button>
        </div>
      </div>
      <div className={style["btn-wrapper"]}>
        <button className={style["send"]} onClick={() => setModalMode("send")}>
          Skicka ➡
        </button>
        <button
          className={style["enable"]}
          onClick={() => setModalMode("enable")}
        >
          Sätt i drift ⬇
        </button>
      </div>
      {["send", "enable"].includes(modalMode) && <Modal item={item} />}
    </div>
  )
}
