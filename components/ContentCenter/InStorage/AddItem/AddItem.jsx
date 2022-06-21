import { useMutation, useQuery, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { getAllProducts, insertItem } from "../../../../utilities/fetchers"
import style from "./AddItem.module.css"

export default function AddItem() {
  const queryClient = useQueryClient()
  const { data: products = [] } = useQuery("products", getAllProducts)
  const { selectedLocation } = useGlobalState()

  const { mutate } = useMutation(insertItem, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const handleSelect = (e) => {
    mutate({ location: selectedLocation.id, product: e.target.value })
    e.target.value = ""
  }

  return (
    <div className={style["add-btn"]} title="Lägg till item">
      +
      <select className={style["select"]} onChange={handleSelect} value={""}>
        <option selected disabled hidden value={""}></option>
        {products.map((product) => (
          <option value={product.id} key={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  )
}
