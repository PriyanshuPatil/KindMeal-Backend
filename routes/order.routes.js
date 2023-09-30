const express=require("express") ;
const { getOrder, getSingleOrder, updateSingleOrder, deleteSingleOrder } = require("../controller/order.controller");
const orderRouter=express.Router() ;
orderRouter.get("/",getOrder);
orderRouter.get("/:id",getSingleOrder)
orderRouter.patch("/:id",updateSingleOrder)
orderRouter.delete("/:id",deleteSingleOrder)

module.exports={orderRouter} ;



