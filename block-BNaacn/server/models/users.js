var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var user=new Schema({
    name:String,
    email:{type:String,lowercase:true},
    age:{type:Number,default:0},
    favorites:[String],
    marks:[Number],
    UpdatedAt:{type:date,timestamp:true}

})


var userModel=mongoose.model('User',user)


module.exports=userModel
