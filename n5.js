var http = require("http")
var io = require("socket.io")

var server = http.createServer((req,res)=>{
   
})
server.listen(2183);
const userNode = [];
const msgArr = [];
io.listen(server).on("connection",(user)=>{

    user.on('name',(str)=>{
        userNode.push(str);
        user.lastName = str;
        user.broadcast.emit("user",userNode);
        user.emit("user",userNode);
        //記録を送信
        user.emit("allmsg",msgArr);
    });
    user.on('msg',(str)=>{
      msgArr.push({userName:user.lastName,msg:str,timer:new Date().toLocaleTimeString()});  
      user.broadcast.emit('msg',{userName:user.lastName,msg:str,timer:new Date().toLocaleTimeString()});
      user.emit('mymsg',{userName:user.lastName,msg:str,timer:new Date().toLocaleTimeString()})
    });
    user.on("disconnect",()=>{
        let index_number = userNode.indexOf(user.lastName);
        userNode.splice(index_number,1);
        user.broadcast.emit("userup",user.lastName);
        console.log(userNode)
    })
});