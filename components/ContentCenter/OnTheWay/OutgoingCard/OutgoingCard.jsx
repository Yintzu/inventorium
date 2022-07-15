import { useMutation, useQueryClient } from "react-query"
import { receiveItem } from "../../../../utilities/fetchers"
import style from "../OnTheWay.module.css"

export default function OutgoingCard({ item, locations }) {
  const queryClient = useQueryClient()

  const { mutate } = useMutation(() => receiveItem(item.id), {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  return (
    <div className={style["card"]} key={item.id}>
      <p>{item.name}</p>
      <p>
        Skickat till:{" "}
        {locations.find((location) => location.id === item.sendto).name}
      </p>
      <p>Tracking: {item.tracking}</p>
      <button className={style["hasarrived-btn"]} onClick={mutate}>
        Har ankommit
      </button>
    </div>
  )
}
