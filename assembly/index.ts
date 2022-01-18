// AssemblyScript
import fetch from "node-fetch"

export async function getData(endpoint: string): string {
  const response = await fetch(endpoint)
  const data = await response.json()
  return data
}

export function show(): i32 {
  return 2
}