import Head from "next/head"
import ContentLeft from "../components/ContentLeft/ContentLeft.jsx"
import ContentRight from "../components/ContentRight/ContentRight.jsx"
import ContentCenter from "../components/ContentCenter/ContentCenter.jsx"
import { useState } from "react"

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState("")

  return (
    <div>
      <Head>
        <title>Inventorium</title>
        <meta name="description" content="Home made inventory app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="top-bar">Inventorium</div>

      <main>
        <div className="content-wrapper">
          <ContentLeft setSelectedLocation={setSelectedLocation} />
          <ContentCenter selectedLocation={selectedLocation} />
          <ContentRight />
        </div>
      </main>
    </div>
  )
}
