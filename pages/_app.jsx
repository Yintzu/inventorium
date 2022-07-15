import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import AuthProvider from "../state/AuthContext"
import GlobalStateProvider from "../state/GlobalStateContext"
import "../styles/globals.css"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </GlobalStateProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}
