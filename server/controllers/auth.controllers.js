 import bcrypt from "bcryptjs"
import User from './../models/user.model.js';
 import errorHandler from '../utils/error.js'
export const signup  = async (req,res,next)=>{
       
        let {username,email,password}  = req.body;
        try{
        if(!username || !email || !password || username==="" || email === "" || password === ""){
          res.status(400).json({
            message:"all fields are required"
          })
        }
       
        const hashed = bcrypt.hashSync(password,10);

        const newuser = await User.create({
            username,
            email,
            password:hashed
        })
      
        res.status(200).json({
            status:"success",
            message:"user created ",
            body:{
                newuser
            }
        })
    } catch(error){
        next(errorHandler(400,"all fields are required"));
    }
}