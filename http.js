const http = require("http");

const server = http.createServer(function (request, response) {
  console.log(request.url);

  if (request.url === "/") {
    response.write("welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("acerca de");
    return response.end();
  }

  response.write(`
        <h1>NOT FOUND </h1>
        <p>Esta pagina no se encontro</p>
        <a href='/'>Volver a la pagina principal</a>
        `);
  response.end();
});

server.listen(3000);
console.log("servidor escuchando en el puerto 3000");
