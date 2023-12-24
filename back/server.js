//HTTP Server
const http = require("http");
const app = require("./app");

port = process.env.PORT || 3000;
app.set("port", process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
