import Head from "next/head"
import ContentLeft from "../components/ContentLeft/ContentLeft.jsx"
import ContentRight from "../components/ContentRight/ContentRight.jsx"
import ContentCenter from "../components/ContentCenter/ContentCenter.jsx"
import TopBar from "../components/TopBar/TopBar.jsx"
import Login from "../components/Login/Login.jsx"
import Modal from "../components/Modal/Modal.jsx"
import { useAuth } from "../state/AuthContext.jsx"
import { useGlobalState } from "../state/GlobalStateContext.jsx"

export default function Home() {
  const { user } = useAuth()
  const { modalMode } = useGlobalState()

  return (
    <div>
      <Head>
        <title>Inventorium</title>
        <meta name="description" content="Home made inventory app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <main>
        {user === undefined ? null : user ? (
          <div className="content-wrapper">
            <ContentLeft />
            <ContentCenter />
            <ContentRight />
            {modalMode && <Modal />}
          </div>
        ) : (
          <Login />
        )}
      </main>
    </div>
  )
}
