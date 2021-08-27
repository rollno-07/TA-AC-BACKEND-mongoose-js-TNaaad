var express=require('express')
var mongoose=require('mongoose')
var app=express();

mongoose.connect('mongodb://127.0.0.1:27017/sample',(err)=>{
    console.log(err?err:'Connected to db');
})

app.listen(3000,()=>{
    console.log("sever is listening on port 3k");
})