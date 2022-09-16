const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users=[];
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log(`${socket.id} socket id`);
  socket.on("join-chat",function(name){
    socket.broadcast.emit("user-joined",name)

    users.push({id:socket.id,name:name})
 
  })


  socket.on("chat_msg",function(userObj){
    socket.broadcast.emit("receive-chat",userObj)
  })
socket.on("disconnect",function(){



  let user = users.filter(function(userObj){
return userObj.id == socket.id
  });
  if(user)
  {

    socket.broadcast.emit("leave",user[0].name)

  }
   users = users.filter(function(userObj){
    return userObj.id != socket.id
  })


})


});


let port = process.env.PORT || 3000;


server.listen(port, () => {
  console.log('listening on *:3000');
});