import { fetch } from "as-fetch";

export async function getData(): string {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {
    method: "GET",
    mode: "no-cors",
    headers: [],
    body: null
  })
  const data = await response.json()
  return data
}

export function getNum(): i32{
  return 3
}

export function getStr(): string {
  return "Hello from assemblyscript"
}

export function makeStr(str: string): string {
  return str
}