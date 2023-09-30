const { mealsModel } = require("../model/meals.model");

const getMeals=async(req,res)=>{
try{
let meals_data=await mealsModel.find() ;
res.status(200).send(meals_data)
}catch(err){
    res.status(400).send(err.message)
}
}


const getSingleMeals=async(req,res)=>{
let id=req.params.id
try{
let meals_data=await mealsModel.findById(id) ;
if(meals_data.length!=0){
    res.status(200).send(meals_data)
}else{
    res.status(400).send("Data is Not Present with matching id")
}

}catch(err){
res.status(400).send(err.message)
}
}


const updateSingleMeals=async(req,res)=>{
let id=req.params.id;
try{
let meals_data=await mealsModel.findByIdAndUpdate({_id:id},{...req.body}) ;
res.status(200).send("Data updated successfully")
}catch(err){
res.status(400).send(err.message)
}
}

const postSingleMeals=async(req,res)=>{
try{
let meals_data=await mealsModel.find({imageUrl:req.body.imageUrl}) ;
if(meals_data.length==0){
let new_meals=new mealsModel(req.body);
await new_meals.save() ;
res.status(200).send("Data added successfully")
}else{
res.status(400).send("Data allready Present")    
}

}catch(err){
res.status(400).send(err.message)
}
}
    

const deleteSingleMeals=async(req,res)=>{
let id=req.params.id;
try{
let meals_data=await mealsModel.findByIdAndDelete(id) ;
res.status(200).send("Data deleted successfully")
}catch(err){
res.status(400).send(err.message)
}
}

module.exports={getMeals,getSingleMeals,updateSingleMeals,deleteSingleMeals,postSingleMeals} ;