import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res ,next) => {
  
  //this is written why because we have to send the data from body for post method
  const { username, email, password } = req.body;

  
  //normal validation
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    next(errorHandler(400,'All Fields are required'));
  } 

  //hashing the password by using bcryptjs package
  const hashedPassword =  bcryptjs.hashSync(password,10) 
 
  
  const newUser = new User({
    username,
    email,
    password : hashedPassword,
  });
  try {
    await newUser.save();
    res.json("signup succesfull");
  } catch (error) { 
    next(error)
  }
};
