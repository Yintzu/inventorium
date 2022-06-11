import { useState } from "react"
import style from "./ContentCenter.module.css"
import AddItem from "./AddItem/AddItem"
import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter({ selectedLocation }) {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className={style["content-center"]}>
      {selectedLocation && (
        <>
          <div className={style["content-center-title-wrapper"]}>
            <p className={style["content-center-title"]}>{selectedLocation}</p>
            <p
              className={style["content-center-add-btn"]}
              onClick={() => setShowAddModal(true)}
            >
              +
            </p>
          </div>

          <div className={style["content-center-containers"]}>
            <OnTheWay />
            <InStorage />
            <InUse />
          </div>
        </>
      )}
      {showAddModal && <AddItem setShowAddModal={setShowAddModal} />}
    </div>
  )
}
