import { useQuery } from "react-query"
import { useGlobalState } from "../../state/GlobalStateContext"
import { getItemsForLocation } from "../../utilities/fetchers"
import style from "./ContentCenter.module.css"
import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter() {
  const { selectedLocation } = useGlobalState()
  const { data: itemsForLocation } = useQuery(
    "itemsForLocation",
    getItemsForLocation
  )

  console.log('itemsForLocation', itemsForLocation)

  return (
    <div className="content-center">
      {selectedLocation && (
        <>
          <p className={style["title"]}>{selectedLocation}</p>
          <div className={style["containers"]}>
            <OnTheWay />
            <InStorage />
            <InUse />
          </div>
        </>
      )}
    </div>
  )
}
