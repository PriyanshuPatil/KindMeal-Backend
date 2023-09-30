const { momentsModel } = require("../model/moments.modal")

const getMoments=async(req,res)=>{
try{
let moments_data=await momentsModel.find() ;
res.status(200).send(moments_data)
}catch(err){
    res.status(400).send(err.message)
}
}


const getSingleMoments=async(req,res)=>{
let id=req.params.id
try{
let moments_data=await momentsModel.findById(id) ;
if(moments_data.length!=0){
    res.status(200).send(moments_data)
}else{
    res.status(400).send("Data is Not Present with matching id")
}

}catch(err){
res.status(400).send(err.message)
}
}

const postSingleMoments=async(req,res)=>{
try{
let moments_data=await momentsModel.find({imageUrl:req.body.imageUrl}) ;
if(moments_data.length==0){
let new_moments=new momentsModel(req.body);
await new_moments.save() ;
res.status(200).send("Data added successfully")
}else{
res.status(400).send("Data allready Present")    
}
}catch(err){
res.status(400).send(err.message)
}
}

const updateSingleMoments=async(req,res)=>{
let id=req.params.id;
try{
let moments_data=await momentsModel.findByIdAndUpdate({_id:id},{...req.body}) ;
res.status(200).send("Data updated successfully")
}catch(err){
res.status(400).send(err.message)
}
}

const deleteSingleMoments=async(req,res)=>{
let id=req.params.id;
try{
let moments_data=await momentsModel.findByIdAndDelete(id) ;
res.status(200).send("Data deleted successfully")
}catch(err){
res.status(400).send(err.message)
}
}

module.exports={getMoments,getSingleMoments,updateSingleMoments,deleteSingleMoments,postSingleMoments} ;