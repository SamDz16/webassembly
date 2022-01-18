// const fs = require("fs");
// const loader = require("@assemblyscript/loader");
// const imports = { /* imports go here */ };
// const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
// const {add} = wasmModule.exports;


// console.log(add(2, 3))

const fs = require("fs");
const loader = require("@assemblyscript/loader");
const buf = fs.readFileSync('./build/optimized.wasm');
const wasm = new WebAssembly.Module(new Uint8Array(buf));
loader.instantiate(wasm, { 
  env: { 
    abort: (err) => {
      console.error(err)
    }
  }
}).then((wasmModule) => {

  console.log(wasmModule.exports);
  // Code to use the instantiated wasm module

    const {
        __retain, 
        __allocString,
        __release,
        replaceHelloWithHi
    } = wasmModule.exports;
    const originalStr = "hello world";
    const ptr = __retain(__allocString(originalStr));
    const newPtr = replaceHelloWithHi(ptr);
    const newStr = __getString(newPtr);
    __release(ptr);
    __release(newStr);
    console.log(newStr);
    // logs out 'hi world'

});
