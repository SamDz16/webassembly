const fs = require("fs");
const loader = require("@assemblyscript/loader");

const FetchImport = require("as-fetch/imports")
const Fetch = new FetchImport()

// Import the loader
// const imports = {
//     /* imports go here */
//     indx: {
//         log: (message) => {
//             const content = wasmModule
//         }
//     }
// };
const wasmModule = loader.instantiateSync(
    fs.readFileSync(__dirname + "/server/public/fetch.wasm"),
    {
        index: {
            log: (message) => {
                const content = wasmModule.exports.__getString(message);
                // Convert message to string
                console.log(content);
                // Log it to the console.
            }
        },
        ...Fetch.wasmImports
    }
);
// Instantiate the AS program
Fetch.wasmExports = wasmModule.exports;


const { getNum, getGivenNum, makeStr, getData, getStr, consolelog, __getString, __newString } = wasmModule.exports;

// console.log(getNum());
// console.log(getGivenNum(6));
// console.log(__getString(makeStr(__newString("je suis dans index.js"))));
// console.log(__getString(getStr()));
// consolelog(__newString("AssemblyScript console log :)"));

const data = __getString(getData(__newString("https://jsonplaceholder.typicode.com/users?_limit=1"), function(res) { return res }));
console.log("Here is the user fetched:", data);