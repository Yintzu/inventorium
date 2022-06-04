import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter({ selectedLocation }) {
  return (
    <div className="content-center">
      {selectedLocation && (
        <>
          <p className="content-center-title">{selectedLocation}</p>

          <div className="content-center-containers">
            <OnTheWay />
            <InStorage />
            <InUse />
          </div>
        </>
      )}
    </div>
  )
}
