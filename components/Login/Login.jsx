import { useRef } from "react"
import { useAuth } from "../../state/AuthContext"
import style from "./Login.module.css"

export default function Login() {
  const { loginUser, isLoading } = useAuth()

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()
    if (isLoading) return
    loginUser(emailInputRef.current.value, passwordInputRef.current.value)
  }

  return (
    <div className={style["login"]}>
      <form className={style["input-wrapper"]} onSubmit={submitHandler}>
        <h2 className={style["login-title"]}>Login</h2>
        <label htmlFor="emailInput">Email:</label>
        <input
          type="text"
          id="emailInput"
          className={style["input"]}
          ref={emailInputRef}
        />
        <label htmlFor="passwordInput">Lösenord:</label>
        <input
          type="password"
          id="passwordInput"
          className={style["input"]}
          ref={passwordInputRef}
        />
        <div className={style["button-wrapper"]}>
          <button className={style["button"]} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
