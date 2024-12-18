const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/about") {
    res.end("This is About Page");
  } else if (req.url == "/profile") {
    res.end("This is a Profile Page");
  } else if (req.url == "/") {
    res.end("Hello World!");
  }
});

server.listen(3000);
