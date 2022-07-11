import { useEffect, useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { deleteItem, putInUse } from "../../../../utilities/fetchers"
import Modal from "../../../Modal/Modal"
import EditButton from "../../EditButton/EditButton"
import style from "../InStorage.module.css"

export default function InStorageCard({ item }) {
  const [showModal, setShowModal] = useState(false)
  const queryClient = useQueryClient()
  const { modalMode, setModalMode, selectedLocation } = useGlobalState()

  const mutationSettings = {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  }

  const { mutate: decrement } = useMutation(deleteItem, mutationSettings)
  const { mutate: enable } = useMutation(putInUse, mutationSettings)

  const handleOpenModal = (mode) => {
    setModalMode(mode)
    setShowModal(true)
  }

  useEffect(() => {
    if (!modalMode) setShowModal(false)
  }, [modalMode])

  return (
    <tr className={style["table-row"]}>
      <td className={style["name-cell"]}>{item.name}</td>
      <td>
        <div className={style["justify-between"]}>
          <span>{item.serial}</span>

          <div className={style["btn-wrapper"]}>
            <button
              className={style["send"]}
              onClick={() => handleOpenModal("send")}
            >
              Skicka ➡
            </button>
            <button
              className={style["enable"]}
              onClick={() =>
                enable({
                  productId: item.productid,
                  locationId: selectedLocation.id,
                })
              }
            >
              Sätt i drift ⬇
            </button>
            <EditButton item={item} handleOpenModal={handleOpenModal} />
          </div>
        </div>
        {showModal && ["send", "edit"].includes(modalMode) && (
          <Modal item={item} />
        )}
      </td>
    </tr>
  )
}
