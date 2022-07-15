import { useQuery } from "react-query"
import { useGlobalState } from "../../../state/GlobalStateContext"
import { getItemsForLocation } from "../../../utilities/fetchers"
import style from "./Location.module.css"

export default function Location({ location }) {
  const { selectedLocation, setSelectedLocation, setShowSidebarMobile } =
    useGlobalState()

  const { data: itemsForLocation } = useQuery(
    ["itemsForLocation", selectedLocation],
    () => getItemsForLocation(selectedLocation?.id),
    { enabled: !!selectedLocation }
  )

  let incoming = [],
    outgoing = [],
    inStorage = [],
    inUse = []
  if (itemsForLocation) {
    itemsForLocation.forEach((item) => {
      if (item.sendto && item.sendto === selectedLocation.id)
        incoming.push(item)
      else if (item.sendto && item.sendto !== selectedLocation.id)
        outgoing.push(item)
      else if (!item.inuse) inStorage.push(item)
      else if (item.inuse) inUse.push(item)
    })
  }

  const handleClick = () => {
    setSelectedLocation(location)
    setShowSidebarMobile(false)
  }

  return (
    <div className={style["location"]} onClick={handleClick}>
      <div className={style["location-title-wrapper"]}>
        <p className={style["location-title"]}>{location.name}</p>
      </div>
      {selectedLocation?.id === location.id ? (
        <div className={style["expanded-categories-wrapper"]}>
          <p className={style["expanded-categories"]}>
            <b>({incoming.length})</b> På väg in
          </p>
          <p className={style["expanded-categories"]}>
            <b>({outgoing.length})</b> På väg ut
          </p>
          <p className={style["expanded-categories"]}>
            <b>({inStorage.length})</b> I Lager
          </p>
          <p className={style["expanded-categories"]}>
            <b>({inUse.length})</b> I drift
          </p>
        </div>
      ) : null}
    </div>
  )
}
