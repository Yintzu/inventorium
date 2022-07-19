import Head from "next/head"
import ContentLeft from "../components/ContentLeft/ContentLeft.jsx"
import ContentRight from "../components/ContentRight/ContentRight.jsx"
import ContentCenter from "../components/ContentCenter/ContentCenter.jsx"
import TopBar from "../components/TopBar/TopBar.jsx"
import Login from "../components/Login/Login.jsx"
import { useAuth } from "../state/AuthContext.jsx"
import Modal from "../components/Modal/Modal.jsx"
import { useGlobalState } from "../state/GlobalStateContext.jsx"

export default function Home() {
  const { user } = useAuth()
  const { modal } = useGlobalState()

  return (
    <div>
      <Head>
        <title>Inventorium</title>
        <meta name="description" content="Home made inventory app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"></link>
      </Head>

      <TopBar />
      <main>
        {user === undefined ? null : user ? (
          <div className="content-wrapper">
            <ContentLeft />
            <ContentCenter />
            <ContentRight />
          </div>
        ) : (
          <Login />
        )}
        {modal.mode && <Modal />}
      </main>
    </div>
  )
}
