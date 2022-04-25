import axios from "axios"
import { QueryFunctionContext } from "react-query"
import { components } from "./backend"

type Item = components["schemas"]["Item"]
type ItemList = components["schemas"]["ItemList"]

export const keysItem = {
  list: [{ scope: "list" }] as const,
  item: (id: number) => [{ scope: "item", id }] as const,
}

export const getItemList = async (): Promise<ItemList> => {
  const response = await axios.get("http://127.0.0.1:3000/api/", { timeout: 1000 })
  return response.data
}

export const getItem = async ({
  queryKey: [{ id }],
}: QueryFunctionContext<ReturnType<typeof keysItem["item"]>>): Promise<Item> => {
  const response = await axios.get(`http://127.0.0.1:3000/api/${id}`, { timeout: 1000 })
  return response.data
}
