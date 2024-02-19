import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'
import authRoutes from "./routes/auth.route.js";

//configuring dotenv file
dotenv.config()

//invoking of expressjs
const app = express();

//this is to get the data in json format
app.use(express.json())


//mongoDB connection code
mongoose.connect(
    process.env.MONGO
).then(()=>{
    console.log('mongodb connected succesfully!!');
}).catch((err)=>{
    console.log(err);
})

//Base URL's
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
  

//error handling middleware
app.use((err,res,req,next)=>{
    const statusCode = err.statusCode || 500;
    const message =err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

//creation of port number
app.listen(3000, () => {
    console.log("Server is running on PORT 3000!");
  });
