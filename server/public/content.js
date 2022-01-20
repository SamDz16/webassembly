loader.instantiate(
    // Binary to instantiate
    fetch("http://localhost:3000/fetch.wasm")
  ).then((wasm) => {
    const {getNum, getStr, makeStr, getGivenNum, __newString, __getString} = wasm.exports;
      
      console.log(getNum())
      console.log(getGivenNum(18))
      console.log(__getString(getStr()));
      console.log(__getString(makeStr(__newString("Hello, there :)"))));
  })
