import { useDataContext } from "../../state/DataContext"
import Location from "./Location"

export default function ContentLeft({ setSelectedLocation }) {
  const { locations } = useDataContext()

  console.log('locations', locations)
  return (
    <div className="content-left">
      <Location
        location={"Huvudkontor"}
        setSelectedLocation={setSelectedLocation}
      />
      <Location
        location={"Norrköping"}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  )
}
