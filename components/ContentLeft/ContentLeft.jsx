import style from "./ContentLeft.module.css"
import Location from "./Location/Location"
import { useQuery, useQueryClient } from "react-query"
import { getLocations } from "../../utilities/fetchers"
import { useGlobalState } from "../../state/GlobalStateContext"
import Modal from "../Modal/Modal"

export default function ContentLeft() {
  const { data: locations = [] } = useQuery("locations", getLocations)
  const { showSidebarMobile, modalMode, setModalMode } = useGlobalState()
  const queryClient = useQueryClient()

  return (
    <div className={`content-left ${showSidebarMobile && "content-left-open"}`}>
      <div className={style["content-left-locations-wrapper"]}>
        {locations.map((item) => (
          <Location key={item.id} location={item} />
        ))}
      </div>
      <div className={style["icon-wrapper"]}>
        <img
          src="/addLocation.svg"
          title="Lägg till plats"
          className={style["icon"]}
          onClick={() => setModalMode("addLocation")}
        />
        <img
          src="/addItem.svg"
          className={style["icon"]}
          title="Lägg till produkt"
          onClick={() => setModalMode("addProduct")}
        />
        <img
          src="/refresh.svg"
          className={style["refresh"]}
          title="Uppdatera all data"
          onClick={() => queryClient.refetchQueries()}
        />
      </div>
      {["addLocation", "addProduct"].includes(modalMode) && <Modal />}
    </div>
  )
}
