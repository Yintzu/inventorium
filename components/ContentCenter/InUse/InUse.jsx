import styles from "./InUse.module.css"
import centerStyle from "../ContentCenter.module.css"

export default function InUse() {
  return (
    <div className={centerStyle["content-center-container"]}>
      <p className={centerStyle["content-center-container-title"]}>I drift</p>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["table-headers"]}>
            <th>Hostname</th>
            <th>Modell</th>
            <th>Serienummer</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles["table-row"]}>
            <td>SE-HEIM-NRK-SPARVE09-AS01</td>
            <td>C375048P</td>
            <td>FSF94UR9U4</td>
            <td className={styles["remove"]}>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
