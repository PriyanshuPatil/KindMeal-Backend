const mongoose=require("mongoose") ;
require("dotenv").config() ;
const Connection=mongoose.connect(process.env.mongoUrl) ;
mongoose.set("strictQuery",false) ;
module.exports={
    Connection 
}

