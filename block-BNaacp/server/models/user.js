var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var user=new Schema({
    name:String,
    email:{type:String,lowercase:true},
    age:{type:Number,default:0},
    sport:[{type:String}]
})
mongoose.model('User',user)

var userModel=mongoose.model('User',user)


module.exports=userModel