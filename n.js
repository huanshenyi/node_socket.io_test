var http = require("http");
var io = require("socket.io");

var server = http.createServer((req,res)=>{
   
})
server.listen(2183);
const arr = [];
io.listen(server).on("connection",(user)=>{
  user.broadcast.emit('msg','誰か入ってきた')
  arr.push(user);
  //console.log("誰かきた!")
//   setInterval(()=>{
//     user.emit("aaa",Math.random());
//   },1000)
// user.on('bbb',(str)=>{
//     console.log(str)
// })
    user.on('msg',(str)=>{
        // console.log(str);
        // user.emit('msg',str);
        
        //全部userにメッセージ
        // arr.forEach((user)=>{
        //   user.emit('msg',str)
        // })

        // またオンラインして、自分以外のuserにメッセージ
        user.broadcast.emit('msg',str);
        user.emit('msg','自分:'+str);
    });
    user.on('disconnect',()=>{
      user.broadcast.emit('msg','誰かログアウトした')
    })

})