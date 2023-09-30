const express=require("express") ;
const { getMeals, getSingleMeals, updateSingleMeals, deleteSingleMeals, postSingleMeals } = require("../controller/meals.controller");
const mealsRouter=express.Router() ;
mealsRouter.get("/",getMeals);
mealsRouter.get("/:id",getSingleMeals)
mealsRouter.post("/",postSingleMeals)
mealsRouter.patch("/:id",updateSingleMeals)
mealsRouter.delete("/:id",deleteSingleMeals)

module.exports={mealsRouter} ;