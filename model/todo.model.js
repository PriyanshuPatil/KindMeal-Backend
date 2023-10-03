const mongoose=require("mongoose") ;
const todoSchema=new mongoose.Schema({
    username:{type:String,required:true},
    title:{type:String,required:true},
    priority:{type:String,required:true},
    status:{type:Boolean,required:false,default:false},
},{
    versionKey:false
})

const todoModel=mongoose.model("todo",todoSchema) ;
module.exports={todoModel} ;
