import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useMutation, useQueryClient } from "react-query"
import { putOutOfUse } from "../../../utilities/fetchers"
import EditButton from "../EditButton/EditButton"
import Modal from "../../Modal/Modal"
import { useGlobalState } from "../../../state/GlobalStateContext"
import { useEffect, useState } from "react"

export default function InUse({ itemsForLocation = [] }) {
  const { modalMode, setModalMode } = useGlobalState()
  const [showModal, setShowModal] = useState(false)

  const queryClient = useQueryClient()

  const { mutate } = useMutation(putOutOfUse, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const handleOpenModal = (mode) => {
    setShowModal(true)
    setModalMode(mode)
  }

  useEffect(() => {
    if (!modalMode) setShowModal(false)
  }, [modalMode])

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
          {Array.isArray(itemsForLocation) &&
            itemsForLocation.map((item, i) => {
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
                          <EditButton handleOpenModal={handleOpenModal} />
                        </div>
                      </div>
                      {showModal && modalMode === "edit" && (
                        <Modal item={item} />
                      )}
                    </td>
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
