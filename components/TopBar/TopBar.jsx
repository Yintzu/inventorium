import { useAuth } from "../../state/AuthContext"
import style from "./TopBar.module.css"

export default function TopBar() {
  const { user, logoutUser } = useAuth()

  return (
    <div className={style["top-bar"]}>
      <span className={style["logo"]}>Inventorium</span>
      <div className={style["user-wrapper"]}>
        <span className={style["user"]}>{user?.email}</span>
        <button onClick={logoutUser} className={style["logout"]}>
          Logout
        </button>
      </div>
    </div>
  )
}
