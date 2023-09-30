const mongoose=require("mongoose") ;
const orderSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    status:{type:Boolean,required:false,default:false},
},{
    versionKey:false
})

const orderModel=mongoose.model("orders",orderSchema) ;
module.exports={orderModel} ;
