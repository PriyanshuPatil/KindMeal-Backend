const { todoModel } = require("../model/todo.model");

const getTodo=async(req,res)=>{
    let username=req.params.id
try{
let todo_data=await todoModel.find({username}) ;
res.status(200).send(todo_data)
}catch(err){
    res.status(404).send(err.message)
}
}


const getSingleTodo=async(req,res)=>{
let id=req.params.id
try{
let todo_data=await todoModel.findById(id) ;
if(todo_data.length!=0){
    res.status(200).send(todo_data)
}else{
    res.status(400).send("Data is Not Present with matching id")
}

}catch(err){
res.status(404).send(err.message)
}
}


const postSingleTodo=async(req,res)=>{
try{

let new_todo=new todoModel(req.body);
await new_todo.save() ;
res.status(200).send("Data added successfully")
}catch(err){
res.status(404).send(err.message)
}
}

const updateSingleTodo=async(req,res)=>{
let id=req.params.id;
let todo_datais=await todoModel.findById(id) ;
try{
let todo_data=await todoModel.findByIdAndUpdate({_id:id},{status:!todo_datais.status}) ;
res.status(200).send("Data updated successfully")
}catch(err){
res.status(404).send(err.message)
}
}

const deleteSingleTodo=async(req,res)=>{
let id=req.params.id;
try{
let todo_data=await todoModel.findByIdAndDelete(id) ;
res.status(200).send("Data deleted successfully")
}catch(err){
res.status(404).send(err.message)
}
}

module.exports={getTodo,getSingleTodo,updateSingleTodo,deleteSingleTodo,postSingleTodo} ;