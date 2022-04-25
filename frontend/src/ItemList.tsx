import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { getItemList, keysItem } from "./api"
import Loader from "./Loader"

export default function ItemList() {
  const query = useQuery(keysItem.list, getItemList)
  if (query.data) {
    return (
      <div className="flex flex-col items-center space-y-4">
        {query.data.items.map((id) => (
          <Link key={id} to={`/${id}`} className="text-sky-600 underline">
            Item {id}
          </Link>
        ))}
      </div>
    )
  }
  if (query.isLoading) {
    return <Loader />
  }
  return (
    <div className="text-red-500">
      <div className="font-bold">Oh no !</div>
      <div className="font-mono">{JSON.stringify(query.error)}</div>
    </div>
  )
}
