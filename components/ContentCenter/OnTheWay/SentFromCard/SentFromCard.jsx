import style from "../OnTheWay.module.css"

export default function SentFromCard({ item, locations }) {
  return (
    <div className={style["card"]} key={item.id}>
      <p>{item.name}</p>
      <p>
        Skickat till: {locations.find(location => location.id === item.sendto).name}
      </p>
      <button className={style["hasarrived-btn"]}>Har ankommit</button>
    </div>
  )
}
