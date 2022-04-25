import { QueryClient, QueryClientProvider } from "react-query"
import Item from "./Item"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center py-4 text-gray-900">
        <h1 className="font-bold text-sky-900">OpenAPI / react demo</h1>
        <div className="mt-8" />
        <Item />
      </div>
    </QueryClientProvider>
  )
}

export default App
