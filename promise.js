const {readFile} = require("fs/promises");

async function read() {
  try {
    const result = await readFile("./date/first.txt", 'utf-8');
    console.log(result);
    const result2 = await readFile("./date/second.txt", 'utf-8');
    console.log(result2);
    const result3 = await readFile("./date/third.txt", 'utf-8');
    console.log(result3);
    const result4 = await readFile("./date/fourth.txt", 'utf-8');
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
}
read();
