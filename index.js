const express=require("express") ;
const cors=require("cors") ;
const { usersRouter } = require("./routes/user.route");
const { momentsRouter } = require("./routes/moments.routes");
const { orderRouter } = require("./routes/order.routes");
const { mealsRouter } = require("./routes/meals.routes");
const { Connection } = require("./config/db");
const { appoinmentRouter } = require("./routes/appoinment.routes");
const { bookingRouter } = require("./routes/booking.routes");
const { Authenticator } = require("./middleware/authentication.middleware");
const { todoRouter } = require("./routes/todo.routes");
const { projectRouter } = require("./routes/project.routes");
const { podcastRouter } = require("./routes/podcast.routes");
const { oemSpecsRouter } = require("./routes/oemSpecs.routes");
const { marketplaceInventorRouter } = require("./routes/marketplaceInventor.routes");
const { ContactRouter } = require("./routes/phonebook.routes");
const {admissionRouter} = require('./routes/admission.route')
const app=express() ;
require("dotenv").config() ;
app.use(cors()) ;
app.use(express.json()) ;

app.get("/",(req,res)=>{
    res.send("Welcome To Backend HomePage") ;
})
app.use("/user", usersRouter);
app.use('/admission',admissionRouter)
app.use("/moments",momentsRouter)
app.use("/project",projectRouter);
app.use("/podcast",podcastRouter);
app.use("/contact",ContactRouter);
app.use("/appoinment",appoinmentRouter);
app.use("/booking",bookingRouter);
app.use("/meals",mealsRouter)
app.use("/order", orderRouter)
app.use("/todo",todoRouter)
app.use("/marketplaceinventory",marketplaceInventorRouter);
app.use("/oemspecs",oemSpecsRouter);

app.listen(process.env.port,async()=>{
try{
    await Connection
console.log("connected to DB")
}catch(err){
    console.log(err.message)
}
console.log(`application running at ${process.env.port}`)
})