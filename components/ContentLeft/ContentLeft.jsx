import { useDataContext } from "../../state/DataContext"
import AddLocation from "./AddLocation"
import Location from "./Location"

export default function ContentLeft({ setSelectedLocation }) {
  const { locations } = useDataContext()

  return (
    <div className="content-left">
      <div className="content-left-locations-wrapper">
        {locations?.map(item => (
          <Location
            key={item.id}
            location={item.name}
            setSelectedLocation={setSelectedLocation}
          />
        ))}
      </div>
      <AddLocation />
    </div>
  )
}
