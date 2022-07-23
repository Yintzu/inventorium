import style from "./OnTheWay.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useQuery } from "react-query"
import { getLocations } from "../../../utilities/fetchers"
import { useGlobalState } from "../../../state/GlobalStateContext"
import OutgoingCard from "./OutgoingCard/OutgoingCard"
import IncomingCard from "./IncomingCard/IncomingCard"

export default function OnTheWay({ itemsForLocation }) {
  const { selectedLocation } = useGlobalState()
  const { data: locations = [] } = useQuery("locations", getLocations)

  return (
    <div className={style["container-wrapper"]}>
      <div className={centerStyle["container"]}>
        <p className={centerStyle["container-title"]}>På väg in</p>
        <div className={style["grid"]}>
          {Array.isArray(itemsForLocation) &&
            itemsForLocation.map((item) => {
              if (item.sendto && item.sendto === selectedLocation.id) {
                return (
                  <IncomingCard
                    item={item}
                    locations={locations}
                    key={item.id}
                  />
                )
              }
            })}
        </div>
      </div>
      <div className={centerStyle["container"]}>
        <div>
          <p className={centerStyle["container-title"]}>På väg ut</p>
          <div className={style["grid"]}>
            {Array.isArray(itemsForLocation) &&
              itemsForLocation.map((item) => {
                if (item.sendto && item.sendto !== selectedLocation.id) {
                  return (
                    <OutgoingCard
                      item={item}
                      locations={locations}
                      key={item.id}
                    />
                  )
                }
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
