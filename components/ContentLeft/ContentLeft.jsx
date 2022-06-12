import { useDataContext } from "../../state/DataContext"
import style from "./ContentLeft.module.css"
import AddLocation from "./AddLocation/AddLocation"
import Location from "./Location/Location"

export default function ContentLeft({
  setSelectedLocation,
  showLocationsMobile,
  setShowLocationsMobile,
}) {
  const { locations } = useDataContext()

  return (
    <div
      className={`content-left ${showLocationsMobile && "content-left-open"}`}
    >
      <div className={style["content-left-locations-wrapper"]}>
        {locations?.map(item => (
          <Location
            key={item.id}
            location={item.name}
            setSelectedLocation={setSelectedLocation}
            setShowLocationsMobile={setShowLocationsMobile}
          />
        ))}
      </div>
      <AddLocation />
    </div>
  )
}
