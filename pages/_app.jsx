import "../styles/globals.css"
import "../components/ContentLeft/ContentLeft.css"
import "../components/ContentCenter/ContentCenter.css"
import DataProvider from "../state/DataContext"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </QueryClientProvider>
  )
}
