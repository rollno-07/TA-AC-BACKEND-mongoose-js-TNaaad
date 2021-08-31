var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var address= new Schema({
    village:String,
    city:String,
    state:String,
    pin:Number,
    user:Schema.Types.ObjectId,
    UpdatedAt:{type:date,timestamp:true}
})

var addressModel=mongoose.model('Address',address)

module.exports=addressModel;