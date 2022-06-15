import { useQuery } from "react-query"
import { getLocations } from "../../utilities/fetchers"
import style from "./Modal.module.css"

export default function Modal({ modalMode, setModalMode, selectedLocation }) {
  const { data: locations } = useQuery("locations", getLocations)

  const renderModalType = () => {
    if (modalMode === "send") {
      const otherLocations = locations.filter(
        item => item.name !== selectedLocation
      )

      return (
        <>
          <p className={style["title"]}>Skicka till:</p>
          <select className={style["select"]}>
            {otherLocations.map(item => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
        </>
      )
    }

    if (modalMode === "enable") {
      return (
        <>
          <p className={style["title"]}>Ange hostname</p>
          <input type="text" className={style["input"]} />
        </>
      )
    }
  }

  return (
    <div className={style["overlay"]}>
      <div className={style["box"]}>
        <div className={style["container"]}>
          {renderModalType()}

          <div className={style["btn-wrapper"]}>
            <button
              className={style["cancel"]}
              onClick={() => setModalMode(false)}
            >
              Avbryt
            </button>
            <button className={style["confirm"]}>Lägg till</button>
          </div>
        </div>
      </div>
    </div>
  )
}
