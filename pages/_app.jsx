import "../styles/globals.css"
import "../components/ContentLeft/ContentLeft.css"
import "../components/ContentCenter/ContentCenter.css"
import DataProvider from "../state/DataContext"

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
