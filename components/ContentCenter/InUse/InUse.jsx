import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function InUse({ itemsForLocation = [] }) {
  return (
    <div className={centerStyle["container"]}>
      <p className={centerStyle["container-title"]}>I drift</p>
      <table className={style["table"]}>
        <thead>
          <tr className={style["table-headers"]}>
            <th>Hostname</th>
            <th>Modell</th>
            {/* <th>Serienummer</th> */}
          </tr>
        </thead>
        <tbody className={style["table-body"]}>
          {Array.isArray(itemsForLocation) &&
            itemsForLocation.map((item, i) => {
              if (item.inuse)
                return (
                  <tr className={style["table-row"]} key={i}>
                    <td>{item.name}</td>
                    <td className={style["justify-between"]}>
                      <span>C375048P</span>
                      <button className={style["remove-btn"]}>
                        Ta ur drift
                      </button>
                    </td>
                    {/* <td>FSF94UR9U4</td> */}
                  </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
