const mongoose=require("mongoose") ;
const momentsSchema=new mongoose.Schema({
    imageUrl:{type:String,required:true},
    title:{type:String,required:true},
    about:{type:String,required:true}
},{
    versionKey:false
})

const momentsModel=mongoose.model("moments",momentsSchema) ;
module.exports={momentsModel} ;