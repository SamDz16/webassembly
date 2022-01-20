// import { fetch } from "as-fetch";

// export function getData(): string {
//   fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {
//     method: "GET",
//     mode: "no-cors",
//     headers: [["content-type", "application/json"]],
//   })
//   .then((response) => response.json())
//   .then(data => {
//     console.log(data);
//     return data
//   })
// }


export function getNum(): i32{
  return 3
}

export function getGivenNum(num: i32): i32{
  return num
}

export function getStr(): string {
  return "Hello from assemblyscript"
}

export function makeStr(str: string): string {
  return str
}