const express=require("express") ;
const cors=require("cors") ;
const { momentsRouter } = require("./routes/moments.routes");
const { usersRouter } = require("./routes/users.routes");
const { orderRouter } = require("./routes/order.routes");
const { mealsRouter } = require("./routes/meals.routes");
const { Connection } = require("./config/db");
const { Authenticator } = require("./middleware/authentication.middleware");
const app=express() ;
require("dotenv").config() ;
app.use(cors()) ;
app.use(express.json()) ;

app.get("/",(req,res)=>{
    res.send("Welcome To Khana-Khajana Backend HomePage") ;
})
app.use("/user",usersRouter)
app.use("/moments",momentsRouter)
app.use("/meals",mealsRouter)
app.use("/order", orderRouter)
app.listen(process.env.port,async()=>{
try{
    await Connection
console.log("connected to DB")
}catch(err){
    console.log(err.message)
}
console.log(`application running at ${process.env.port}`)
})