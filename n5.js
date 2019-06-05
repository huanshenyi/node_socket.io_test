var http = require("http")
var io = require("socket.io")

var server = http.createServer((req,res)=>{
   
})
server.listen(2183);
const userNode = []
io.listen(server).on("connection",(user)=>{

    user.on('name',(str)=>{
        userNode.push(str);
        user.lastName = str;
        user.broadcast.emit("user",userNode);
        user.emit("user",userNode);
        console.log(user.lastName)
    });
    user.on('msg',(str)=>{
      user.broadcast.emit('msg',{userName:user.lastName,msg:str,timer:new Date().toLocaleTimeString()});
      user.emit('msg',{userName:user.lastName,msg:str,timer:new Date().toLocaleTimeString()})
    });
    user.on("disconnect",()=>{
        
    })
});