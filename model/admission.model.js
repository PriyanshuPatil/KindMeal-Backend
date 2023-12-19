const mongoose=require("mongoose");  
const admissionSchema=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
    age:{
        type:Number,
        required:true,
    },
    batch:{
        type:String,
        required :true,
    },
    date:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    }
},{
    versionKey:false
})
const admissionModel=mongoose.model("admissions",admissionSchema);
module.exports={admissionModel}

