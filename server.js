const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 3000;
app.use(express.static(path.join(__dirname, "Front")));
const server = app.listen(port, () => console.log(`server on port ${port}`));
const io = require("socket.io")(server);
// const server = new io.Server({
//   host: "192.168.1.3",
//   port: 5000,
// });
let client;
io.on("connection", (socket) => {
  console.log(`socket is : ` + socket.id);

  client = socket;
  socket.on("message", (m) => {
    console.log("clint : " + m.toString());
  });
});

process.stdin.on("data", (d) => {
  client.send(d.toString().trim());
});
