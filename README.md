# AssemblyScript in the Web

In the rooot directory and in the `./server`, run:  
`npm install`

In the `./server` directory, run
`npm start` to fire off the server to serve the wasm file

I am using the `./server/content.js` to load the wasm module from `http://localhost:3000` using loader

To Build the wasm file, i am using:
`npx asc -b ./server/public/fetch.wasm ./assembly/index.ts --exportRuntime --exportTable`
