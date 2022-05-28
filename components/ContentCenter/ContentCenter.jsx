import InStorage from "./InStorage/InStorage"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter({ selectedLocation }) {
  return (
    <div className="content-center">
      <p className="content-center-title">{selectedLocation}</p>
      <div className="content-center-containers">
        <OnTheWay />
        <InStorage />
      </div>
    </div>
  )
}
