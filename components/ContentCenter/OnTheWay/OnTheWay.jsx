import style from "./OnTheWay.module.css"
import centerStyle from "../ContentCenter.module.css"
import { useQuery } from "react-query"
import { getLocations } from "../../../utilities/fetchers"
import { useGlobalState } from "../../../state/GlobalStateContext"
import SentFromCard from "./SentFromCard/SentFromCard"
import SentToCard from "./SentToCard/SentToCard"

export default function OnTheWay({ itemsForLocation }) {
  const { selectedLocation } = useGlobalState()
  const { data: locations = [] } = useQuery("locations", getLocations)

  return (
    <div className={style["container-wrapper"]}>
      <div className={centerStyle["container"]}>
        <p className={centerStyle["container-title"]}>På väg till</p>
        <div className={style["grid"]}>
          {itemsForLocation?.map(item => {
            if (item.sendto && item.sendto === selectedLocation.id) {
              return (
                <SentToCard item={item} locations={locations} key={item.id} />
              )
            }
          })}
        </div>
      </div>
      <div className={centerStyle["container"]}>
        <div>
          <p className={centerStyle["container-title"]}>På väg från</p>
          <div className={style["grid"]}>
            {itemsForLocation?.map(item => {
              if (item.sendto && item.sendto !== selectedLocation.id) {
                return (
                  <SentFromCard
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
