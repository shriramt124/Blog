import express from 'express'
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import UserRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
const app = express();
dotenv.config();
app.use(express.json())
 
const dbConnect  = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db connected.."))
    .catch((error)=>console.log(error))
 }
 
 app.use("/api/user",UserRoutes);
 app.use("/api/auth",authRoutes);





app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message||"internal server error"
    res.status(statusCode).json({
        success:'success',
        statuss:statusCode,
        message

    })
})














const PORT  = process.env.PORT || 3000
app.listen(PORT , ()=>{
   dbConnect();
    
    console.log('server start at port '+ PORT);
})

 