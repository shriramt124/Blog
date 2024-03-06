import express from 'express'
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import UserRoutes from './routes/user.routes.js'
 
const app = express();
dotenv.config();
 
const dbConnect  = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("db connected.."))
    .catch((error)=>console.log(error))
 }
 

const PORT  = process.env.PORT || 3000
app.listen(PORT , ()=>{
   dbConnect();
    
    console.log('server start at port '+ PORT);
})

app.use("/api/user",UserRoutes);