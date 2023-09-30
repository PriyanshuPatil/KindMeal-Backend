const { orderModel } = require("../model/order.model");

const getOrder=async(req,res)=>{
try{
let order_data=await orderModel.find() ;
res.status(200).send(order_data)
}catch(err){
    res.status(400).send(err.message)
}
}


const getSingleOrder=async(req,res)=>{
let id=req.params.id
try{
let order_data=await orderModel.findById(id) ;
if(order_data.length!=0){
    res.status(200).send(order_data)
}else{
    res.status(400).send("Data is Not Present with matching id")
}

}catch(err){
res.status(400).send(err.message)
}
}


const updateSingleOrder=async(req,res)=>{
let id=req.params.id;
try{
let order_data=await orderModel.findByIdAndUpdate({_id:id},{...req.body}) ;
res.status(200).send("Data updated successfully")
}catch(err){
res.status(400).send(err.message)
}
}

const deleteSingleOrder=async(req,res)=>{
let id=req.params.id;
try{
let order_data=await orderModel.findByIdAndDelete(d) ;
res.status(200).send("Data deleted successfully")
}catch(err){
res.status(400).send(err.message)
}
}

module.exports={getOrder,getSingleOrder,updateSingleOrder,deleteSingleOrder} ;