import style from "./ContentLeft.module.css"
import Location from "./Location/Location"
import { useQuery } from "react-query"
import { getLocations } from "../../utilities/fetchers"
import { useGlobalState } from "../../state/GlobalStateContext"

export default function ContentLeft() {
  const { data: locations = [] } = useQuery("locations", getLocations)
  const { showSidebarMobile, setModalMode } = useGlobalState()

  return (
    <div className={`content-left ${showSidebarMobile && "content-left-open"}`}>
      <div className={style["content-left-locations-wrapper"]}>
        {locations.map(item => (
          <Location key={item.id} location={item.name} />
        ))}
      </div>
      <div className={style["icon-wrapper"]}>
        <img
          src="/addLocation.svg"
          title="Lägg till plats"
          className={style["icon"]}
          onClick={() => setModalMode("addLocation")}
        />
        <img src="/addItem.svg" className={style["icon"]} title="Lägg till item"/>
      </div>
    </div>
  )
}
