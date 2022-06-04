import Head from "next/head"
import ContentLeft from "../components/ContentLeft/ContentLeft.jsx"
import ContentRight from "../components/ContentRight/ContentRight.jsx"
import ContentCenter from "../components/ContentCenter/ContentCenter.jsx"
import TopBar from "../components/TopBar/TopBar.jsx"
import { useState } from "react"
import Login from "../components/Login/Login.jsx"
import { useAuth } from "../state/AuthContext.jsx"

export default function Home() {
  const { user } = useAuth()
  const [selectedLocation, setSelectedLocation] = useState("")

  return (
    <div>
      <Head>
        <title>Inventorium</title>
        <meta name="description" content="Home made inventory app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <main>
        {user ? (
          <div className="content-wrapper">
            <ContentLeft setSelectedLocation={setSelectedLocation} />
            <ContentCenter selectedLocation={selectedLocation} />
            <ContentRight />
          </div>
        ) : (
          <Login />
        )}
      </main>
    </div>
  )
}
