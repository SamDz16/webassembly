loader.instantiate(
    // Binary to instantiate
    fetch("http://localhost:3000/optimized.wasm"), {}
  ).then((wasm) => {
    const {concat, show} = wasm.exports;

    const { __newString, __getString } = wasm.exports

    function doConcat(aStr, bStr) {
        let aPtr = __newString(aStr)
        let bPtr = __newString(bStr)
        let cPtr = concat(aPtr, bPtr)
        let cStr = __getString(cPtr)
        return cStr
      }
      
      console.log(doConcat("Hello ", "world!"))
  })

// const WL = new WasmLoader();
// WL.wasm("http://localhost:3000/optimized.wasm")
// .then(instance => {
//     const { concat, show } = instance;

//     console.log(concat("hello ", "world"))
// });