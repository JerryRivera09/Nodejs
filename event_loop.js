const { match } = require("assert");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("welcome to the server");
  }
  if (req.url === "/about") {

    // for(i = 0; i < 10000; i++){
    //     console.log(Math.random()* i)
    // }

    return res.end('about page')
  }

  res.end("not found");
});
server.listen(3000);
console.log("server on port 3000");
