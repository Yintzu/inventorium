import { useState } from "react"
import AddItem from "./AddItem/AddItem"
import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter({ selectedLocation }) {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div className="content-center">
      {selectedLocation && (
        <>
          <div className="content-center-title-wrapper">
            <p className="content-center-title">{selectedLocation}</p>
            <p
              className="content-center-add-btn"
              onClick={() => setShowAddModal(true)}
            >
              +
            </p>
          </div>

          <div className="content-center-containers">
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
