import "../styles/globals.css"
import "../components/ContentLeft/ContentLeft.css"
import "../components/ContentCenter/ContentCenter.css"
import DataProvider from "../state/DataContext"
import { QueryClient, QueryClientProvider } from "react-query"
import AuthProvider from "../state/AuthContext"

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
      <AuthProvider>
        <DataProvider>
          <Component {...pageProps} />
        </DataProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
