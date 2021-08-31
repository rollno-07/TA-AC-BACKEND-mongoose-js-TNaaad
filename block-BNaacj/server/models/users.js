var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var user=new Schema({
    name:String,
    email:{type:String,lowercase:true,match:/@/},
    age:{type:Number,default:0,min:18,max:30},
    password:{type:String,max:20,min:5},
    favorites:[String],
    marks:[Number],
    createAt:{type:Date,default:Date.now}

})

var address= new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId
})