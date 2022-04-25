import { Query, useQuery } from "react-query"
import { getItem } from "./api"
import Loader from "./Loader"

type LabelProps = { label: string }

function Label({ label }: LabelProps) {
  return <div className="mt-4 text-xs font-bold uppercase text-sky-700">{label}</div>
}

export default function Item() {
  const query = useQuery("item", getItem)
  const queryStatus = <div className="mt-8 font-mono">query status : {query.status}</div>
  if (query.data) {
    return (
      <div>
        <Label label="Name" />
        <div>{query.data.name}</div>
        <Label label="Description" />
        <div>{query.data.description}</div>
        <Label label="Price" />
        <div className="font-mono">
          {query.data.price} / {query.data.tax}
        </div>
        <Label label="Tags" />
        <div className="flex space-x-2">
          {query.data.tags?.map((t) => (
            <div key={t}>#{t}</div>
          ))}
        </div>
        {queryStatus}
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
