var http = require("http");
var io = require("socket.io");

var server = http.createServer((req,res)=>{
   
})
server.listen(2183);
io.listen(server).on("connection",(user)=>{
  //console.log("誰かきた!")
//   setInterval(()=>{
//     user.emit("aaa",Math.random());
//   },1000)
// user.on('bbb',(str)=>{
//     console.log(str)
// })
    user.on('msg',(str)=>{
        console.log(str);
        user.emit('msg',str);
    })
})