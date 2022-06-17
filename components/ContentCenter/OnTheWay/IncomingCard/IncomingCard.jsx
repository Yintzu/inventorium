import style from "../OnTheWay.module.css"

export default function IncomingCard({ item, locations }) {
  
  return (
    <div className={style["card"]} key={item.id}>
      <p>{item.name}</p>
      <p>
        På väg från: {locations.find(location => location.id === item.location)?.name}
      </p>
      <button className={style["hasarrived-btn"]}>Har ankommit</button>
    </div>
  )
}
