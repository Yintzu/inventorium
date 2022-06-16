import { useAuth } from "../../state/AuthContext"
import { useGlobalState } from "../../state/GlobalStateContext"
import style from "./TopBar.module.css"

export default function TopBar() {
  const { user, logoutUser } = useAuth()
  const { setShowSidebarMobile } = useGlobalState()

  return (
    <div className={style["top-bar"]}>
      <img
        className={style["location"]}
        src={"/hamburger.svg"}
        onClick={() => setShowSidebarMobile(prev => !prev)}
      />
      <span className={style["logo"]}>Inventorium</span>
      <div className={style["user-wrapper"]}>
        <span className={style["user"]}>{user?.email}</span>
        {user && (
          <button onClick={logoutUser} className={style["logout"]}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}
