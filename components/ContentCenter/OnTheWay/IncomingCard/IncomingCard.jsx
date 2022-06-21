import { useMutation, useQueryClient } from "react-query"
import { receiveItem } from "../../../../utilities/fetchers"
import style from "../OnTheWay.module.css"

export default function IncomingCard({ item, locations }) {
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
        På väg från:{" "}
        {locations.find((location) => location.id === item.locationid).name}
      </p>
      <p>Tracking: {item.tracking}</p>
      <button className={style["hasarrived-btn"]} onClick={mutate}>
        Har ankommit
      </button>
    </div>
  )
}
