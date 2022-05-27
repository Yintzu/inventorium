import Location from "./Location"

export default function ContentLeft({ setSelectedLocation }) {
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
