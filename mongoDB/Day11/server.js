const { Socket } = require('socket.io');
const app = require('./src/app');
const { emit } = require('process');


const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', Socket => {
    console.log(`a User is Connected`);

    Socket.on('disconnect',() => {
        console.log(`User is Disconnected`);
    });

    Socket.on('some-event',(msg) => {                                  //event received from frontend
        console.log(msg);        
        // console.log(`some-event received`);  
        Socket.emit("client-event", "hello node server from backend")   //event fire from backend and listen to frontend (console)
    });


});
server.listen(3000,() => {
    console.log(`server is running on port 3000`)
});