const express = require('express');
const app =  express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const URI = process.env.MD_URI;
mongoose.connect(URI,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',()=>
{
console.log("Connected");
});
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>
{
res.json("Hello");
});

const todosRouter = require('./routes/todos');


app.use('/todos',todosRouter);
io.on('connection',(socket)=>
{
  socket.on('add',(data)=>
  {
io.emit('add',data);
console.log(data);
  });
  console.log('a user connected');
});
http.listen(port,()=>
{
console.log(`App is running on port ${port}`);
});

