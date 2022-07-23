import style from "./ContentLeft.module.css"
import Location from "./Location/Location"
import { useQuery, useQueryClient } from "react-query"
import { getLocations } from "../../utilities/fetchers"
import { useGlobalState } from "../../state/GlobalStateContext"

export default function ContentLeft() {
  const { data: locations = [], error } = useQuery("locations", getLocations)
  const { showSidebarMobile, setModal } = useGlobalState()
  const queryClient = useQueryClient()

  return (
    <div className={`content-left ${showSidebarMobile && "content-left-open"}`}>
      <div className={style["content-left-locations-wrapper"]}>
        {error ? (
          <p>{error}</p>
        ) : (
          locations.map((item) => <Location key={item.id} location={item} />)
        )}
      </div>
      <div className={style["icon-wrapper"]}>
        <img
          src="/addLocation.svg"
          title="Lägg till plats"
          className={style["icon"]}
          onClick={() => setModal({ mode: "addLocation", item: null })}
          alt="Add location"
        />
        <img
          src="/addItem.svg"
          className={style["icon"]}
          title="Lägg till produkt"
          onClick={() => setModal({ mode: "addProduct", item: null })}
          alt="Add product"
        />
        <img
          src="/refresh.svg"
          className={style["refresh"]}
          title="Uppdatera all data"
          onClick={() => queryClient.refetchQueries()}
          alt="Refresh"
        />
      </div>
    </div>
  )
}
