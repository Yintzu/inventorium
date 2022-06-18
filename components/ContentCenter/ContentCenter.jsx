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
    ["itemsForLocation", selectedLocation],
    () => getItemsForLocation(selectedLocation?.id)
  )

  return (
    <div className="content-center">
      {selectedLocation && (
        <>
          <p className={style["title"]}>{selectedLocation.name}</p>
          <div className={style["containers"]}>
            <OnTheWay itemsForLocation={itemsForLocation} />
            <InStorage itemsForLocation={itemsForLocation} />
            <InUse />
          </div>
        </>
      )}
    </div>
  )
}
