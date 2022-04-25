import { QueryClient, QueryClientProvider } from "react-query"
import { Route, Routes } from "react-router"
import Item from "./Item"
import ItemList from "./ItemList"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center py-4 text-gray-900">
        <h1 className="mb-8 font-bold text-sky-900">OpenAPI / react demo</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/:itemId" element={<Item />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
