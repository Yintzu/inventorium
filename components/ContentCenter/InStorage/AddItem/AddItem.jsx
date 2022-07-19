import { useMemo } from "react"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useGlobalState } from "../../../../state/GlobalStateContext"
import { getAllProducts, insertItem } from "../../../../utilities/fetchers"
import style from "./AddItem.module.css"

export default function AddItem() {
  const queryClient = useQueryClient()
  const { data: products = [] } = useQuery("products", getAllProducts)
  const { selectedLocation } = useGlobalState()

  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => (a.name > b.name ? 1 : -1)),
    [products]
  )

  const { mutate } = useMutation(insertItem, {
    onSettled: () => {
      queryClient.refetchQueries()
    },
  })

  const handleSelect = (e) => {
    mutate({ locationid: selectedLocation.id, productid: e.target.value })
    e.target.value = ""
  }

  if (!Array.isArray(products)) return null
  return (
    <div className={style["add-btn"]} title="Lägg till item">
      +
      <select className={style["select"]} onChange={handleSelect} value={""}>
        <option selected disabled hidden value={""}></option>
        {sortedProducts.map((product) => (
          <option value={product.id} key={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  )
}
