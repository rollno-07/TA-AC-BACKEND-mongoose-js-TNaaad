var express=require('express');
var mangoose=require('mongoose');
var app=express();

mangoose.connect('mongodb://127.0.0.1:27017/sample',(err)=>{
    console.log(err?err:"Connected to DataBase");
})


app.listen(3000,()=>{
    console.log("server is listening on port 3k");
})