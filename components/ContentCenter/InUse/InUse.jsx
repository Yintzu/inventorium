import style from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function InUse() {
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
          {[...Array(5)].map((item, i) => (
            <tr className={style["table-row"]} key={i}>
              <td>SE-HEIM-NRK-SPARVE09-AS01</td>
              <td className={style["justify-between"]}>
                <span>C375048P</span>
                <button className={style["remove-btn"]}>Ta ur drift</button>
              </td>
              {/* <td>FSF94UR9U4</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
