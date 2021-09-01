var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var article=new Schema({
title:String,
description:String,
 tags :[String],
createdAt :{type:Date,default:Date.now},
likes:{type:Number,default:0}
})

var articleModle=mongoose.model('Article',article)

module.exports=articleModle