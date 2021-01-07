import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import "tailwindcss/tailwind.css"
import theme from "@/styles/chakraTheme/theme"
import "@/styles/globals.css"
// import "@/styles/wp-styles/styles.scss"

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
