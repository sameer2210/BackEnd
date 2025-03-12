const { Socket } = require("socket.io");
const app = require("./src/app");

const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on('connection', (Socket) => {
  console.log(`New client Connected`);

  Socket.on('disconnect', () => {
    console.log(`Client Disconnected`);
  });
  Socket.on('some-event', (msg) => {
    console.log(msg);
    console.log(`some event occurred`);

    Socket.emit('Client-event',"hello bro from backend");
  });

});
server.listen(3000, () => {
  console.log(`server is running  on port 3000`);
});
