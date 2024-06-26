const {writeFile} = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./date/bigfile.txt", "Hello World".repeat(100000));
};
createBigFile();

// const { error } = require('console')
// const {createReadStream} = require ('fs')
// const stream = createReadStream('./date/bigfile.txt', 'utf-8')
// stream.on('data', function(chunk){
//     console.log(chunk)
// })
// stream.on('end', () => {
//     console.log('Ya termine de leer el archivo')
//  })

// stream.on('error', (error) => {
//     console.log(error)
// })