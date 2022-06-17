import { useMutation, useQueryClient } from "react-query"
import { recieveItem } from "../../../../utilities/fetchers"
import style from "../OnTheWay.module.css"

export default function OutgoingCard({ item, locations }) {
  console.log("item", item)
  const queryClient = useQueryClient()

  const { mutate } = useMutation(() => recieveItem(item.id), {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  return (
    <div className={style["card"]} key={item.id}>
      <p>{item.name}</p>
      <p>
        Skickat till:{" "}
        {locations.find(location => location.id === item.sendto).name}
      </p>
      <button className={style["hasarrived-btn"]} onClick={mutate}>
        Har ankommit
      </button>
    </div>
  )
}
