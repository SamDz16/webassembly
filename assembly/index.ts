import { fetch } from "as-fetch";

export function getNum(): i32 {
  // consolelog("IT'S LOGGING SOMETHOING TO THE CONSOLE")
  return 3
}

export function getGivenNum(num: i32): i32 {
  return num
}

export function getStr(): string {
  return "Hello from assemblyscript"
}

export function makeStr(str: string): string {
  return str
}

declare function log(message: string): void;
// Import the JS log function. (console.log)

export function consolelog(str: string): void {
    log(str);
    // Log 'Hello World!' to the console!
}

export function getData(endpoint: string, callback: Function): void {
  fetch(endpoint, {
    method: "GET",
    mode: "no-cors",
    headers: [],
    body: null
  })
  .then(response => callback(response.text()))
}
