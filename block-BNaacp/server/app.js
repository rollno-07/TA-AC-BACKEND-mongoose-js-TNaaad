var express=require('express')
var app=express()
var user=require('./models/user')
var mongoose=require('mongoose')


app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/sample',(err)=>{
    console.log(err?err:'connected to db');
})
app.post('/user',(req,res,next)=>{
    user.create(req.body,(err,user)=>{
        console.log(err)
        res.json(user)
    })
})

app.get('/user/:id',(req,res,next)=>{
    var id=req.params.id;
    user.findById(id,(err,user)=>{
        console.log(err)
        res.json(user)
    })
})
app.put('/user/:id',(req,res,next)=>{
    var id=req.params.id;
    user.findByIdAndUpdate(id,req.body,{new:true},(err, updateuser)=>{
        console.log(err)
        res.json(updateuser)
    })
})
app.delete('/user/:id',(req,res,next)=>{
    var id=req.params.id;
    user.findByIdAndDelete(id, (err, user) => {
        if (err) return next(err);
        res.send("user deleted");
      });
})




app.listen(3000,()=>{
    console.log("server is listening to port 3k");
})

