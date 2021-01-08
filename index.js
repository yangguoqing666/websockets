const express = require('express');
const socket = require('socket.io');
//实例化express对象
const app = express();
//设置监听的端口号
const server = app.listen(4000,()=>{
    console.log('服务器启动了4000端口号')
})
//让服务器识别静态文件
//?????直接启动》
app.use(express.static('public'));

//设置socket.io 实例化
const io = socket(server);

io.on('connection',(socket)=>{
    console.log('实现了socket的链接',socket.id);
})
