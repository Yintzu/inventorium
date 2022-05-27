import Head from "next/head"
import ContentLeft from "../components/ContentLeft/ContentLeft.jsx"
import ContentRight from "../components/ContentRight/ContentRight.jsx"
import ContentCenter from "../components/ContentCenter/ContentCenter.jsx"
import { useEffect, useState } from "react"

export default function Home(props) {
  const [selectedLocation, setSelectedLocation] = useState("")

  useEffect(() => {

    fetch("/api/posts")
      .then(res => res.json())
      .then(data => console.log("data", data))

  }, [])

  console.log("props.posts", props?.posts)

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
