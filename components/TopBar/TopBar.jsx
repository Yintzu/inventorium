import { useAuth } from "../../state/AuthContext"
import style from "./TopBar.module.css"

export default function TopBar({ setShowLocationsMobile }) {
  const { user, logoutUser } = useAuth()

  return (
    <div className={style["top-bar"]}>
      <img
        className={style["location"]}
        src={"/location.svg"}
        onClick={() => setShowLocationsMobile(prev => !prev)}
      />
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
