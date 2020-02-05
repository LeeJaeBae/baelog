const http = require("http");

const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("server", "proxy");
});

server.listen(port, "proxy", console.log(`test`));
