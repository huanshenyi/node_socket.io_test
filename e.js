const express = require("express");
const io = require("socket.io");
var server = express();
var http = require("http").Server(server);
var blood = 1000,max = 1000;

server.use('/lll',(req,res)=>{
   //console.log(1);
   res.send('40440');
});

http.listen(2131);
server.use("/",express.static('./'))

io.listen(http).on('connection',(user)=>{
//    console.log(1); 
//    user.emit('msg',1);
   user.emit('blood',blood/max);
   user.on('kill',(str)=>{
     var ran = Math.random()*5+5;
     blood -= ran;
     user.emit('kill',[blood/max,ran]);
     user.broadcast.emit('kill',[blood/max,ran]);
   });
});
