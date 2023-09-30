const express=require("express") ;
const { getMoments, getSingleMoments, updateSingleMoments, deleteSingleMoments, postSingleMoments } = require("../controller/moments.controller");
const momentsRouter=express.Router() ;
momentsRouter.get("/",getMoments);
momentsRouter.get("/:id",getSingleMoments)
momentsRouter.post("/",postSingleMoments)
momentsRouter.patch("/:id",updateSingleMoments)
momentsRouter.delete("/:id",deleteSingleMoments)

module.exports={momentsRouter} ;



