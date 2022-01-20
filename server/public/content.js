loader.instantiate(
    // Binary to instantiate
    fetch("http://localhost:3000/fetch.wasm"), {index: {consolelog: str => console.log(str)}})
    .then((wasm) => {
    const {getNum, getStr, makeStr, getData, getGivenNum, __newString, __getString} = wasm.exports;
      
      console.log(getNum())
      console.log(getGivenNum(18))
      console.log(__getString(getStr()));
      console.log(__getString(makeStr(__newString("Hello, there :)"))));
      // console.log(getData());
    })
