import style from "./ContentLeft.module.css"
import Location from "./Location/Location"
import { useQuery, useQueryClient } from "react-query"
import { deleteAll, getLocations } from "../../utilities/fetchers"
import { useGlobalState } from "../../state/GlobalStateContext"
import { useMemo } from "react"

export default function ContentLeft() {
  const { data: locations = [], error } = useQuery("locations", getLocations)
  const { showSidebarMobile, setModal } = useGlobalState()
  const queryClient = useQueryClient()

  const sortedLocations = useMemo(
    () => [...locations].sort((a, b) => (a.name > b.name ? 1 : -1)),
    [locations]
  )

  return (
    <div className={`content-left ${showSidebarMobile && "content-left-open"}`}>
      <div className={style["content-left-locations-wrapper"]}>
        {error ? (
          <p>{error}</p>
        ) : (
          sortedLocations.map((item) => (
            <Location key={item.id} location={item} />
          ))
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
          src="/deleteItems.svg"
          className={style["icon"]}
          title="Ta bort items där serial = DELETE"
          onClick={async () => {
            await deleteAll()
            queryClient.refetchQueries()
          }}
          alt="Remove items"
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
