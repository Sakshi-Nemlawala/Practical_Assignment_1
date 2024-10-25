const http = require("http");
const static = require("node-static");

const fileServer = new static.Server("./public");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fileServer.serveFile("/index.html", 200, {}, req, res);
  } else if (req.url === "/hello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Hello, This is the response of a GET request!</h2>");
  } else if (req.url === "/form1" && req.method === "POST") {
    let body = "";

    req.on("data", (data) => {
      body += data;
    });

    req.on("end", () => {
      const parsedData = new URLSearchParams(body);
      const fname = parsedData.get("fname");
      const lname = parsedData.get("lname");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h2>Welcome..</h2><h3>Hello ${fname} ${lname}</h3>`);
    });
  } else {
    fileServer.serve(req, res);
  }
});

server.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
