const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received:", req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World!</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
