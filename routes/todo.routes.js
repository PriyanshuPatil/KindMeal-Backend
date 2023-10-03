const express=require("express") ;
const { getTodo, getSingleTodo, updateSingleTodo, deleteSingleTodo, postSingleTodo } = require("../controller/todo.controller");
const todoRouter=express.Router() ;
todoRouter.get("/",getTodo);
todoRouter.get("/:id",getSingleTodo)
todoRouter.post("/",postSingleTodo)
todoRouter.patch("/:id",updateSingleTodo)
todoRouter.delete("/:id",deleteSingleTodo)

module.exports={todoRouter} ;



