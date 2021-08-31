var mongoose=require('mongoose');
var Schema=mongoose.Schema;



var article=new Schema({
    name:String,
    email:{type:String,lowercase:true},
    words:{type:Number,default:0},
    favorites:[String],
    marks:[Number]

})
module.exports=mongoose.model('Article',article);
