import { QueryClient, QueryClientProvider } from "react-query"
import DataProvider from "../state/DataContext"
import AuthProvider from "../state/AuthContext"
import "../styles/globals.css"

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
