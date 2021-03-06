import { useQuery } from "react-query"
import { useGlobalState } from "../../state/GlobalStateContext"
import { getItemsForLocation } from "../../utilities/fetchers"
import style from "./ContentCenter.module.css"
import InStorage from "./InStorage/InStorage"
import InUse from "./InUse/InUse"
import OnTheWay from "./OnTheWay/OnTheWay"

export default function ContentCenter() {
  const { selectedLocation } = useGlobalState()

  const { data: itemsForLocation = [], error } = useQuery(
    ["itemsForLocation", selectedLocation],
    () => getItemsForLocation(selectedLocation?.id),
    { enabled: !!selectedLocation }
  )

  return (
    <div className="content-center">
      {error ? (
        <p className={style["title"]}>Error</p>
      ) : (
        selectedLocation && (
          <>
            <p className={style["title"]}>{selectedLocation.name}</p>
            <div className={style["containers"]}>
              <OnTheWay itemsForLocation={itemsForLocation} />
              <InStorage itemsForLocation={itemsForLocation} />
              <InUse itemsForLocation={itemsForLocation} />
            </div>
          </>
        )
      )}
    </div>
  )
}
