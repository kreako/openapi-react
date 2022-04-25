import axios from "axios"
import { components, operations } from "./backend"

type Item = components["schemas"]["Item"]

export const getItem = async (): Promise<Item> => {
  const response = await axios.get("http://127.0.0.1:3000/api/", { timeout: 1000 })
  return response.data
}
