const mongoose=require("mongoose") ;
const mealsSchema=new mongoose.Schema({
    imageUrl:{type:String,required:true},
    imageAlt:{type:String,required:true},
    location:{type:String,required:true},
    off:{type:Number,required:true},
    title:{type:String,required:true},
    reviewCount:{type:Number,required:true},
    rating:{type:Number,required:true}
},
{versionKey:false}) ;
const mealsModel=mongoose.model("meals",mealsSchema)
module.exports={mealsModel}
