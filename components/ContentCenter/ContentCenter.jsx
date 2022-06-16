import style from "./ContentCenter.module.css"
import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter({ selectedLocation }) {
  return (
    <div className="content-center">
      {selectedLocation && (
        <>
          <p className={style["content-center-title"]}>{selectedLocation}</p>
          <div className={style["content-center-containers"]}>
            <OnTheWay />
            <InStorage selectedLocation={selectedLocation} />
            <InUse />
          </div>
        </>
      )}
    </div>
  )
}
