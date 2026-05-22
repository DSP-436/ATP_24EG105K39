//create mini - express app(Separate route)
import exp from 'express'
import { UserModel } from '../models/UserModel.js';
import {hash,compare} from "bcryptjs"
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyTokens.js';


const {sign}=jwt
export const userApp = exp.Router()

//DEFINE USER REST API Routes

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body;
    //very email
    let user = await UserModel.findOne({email:email})
    //if email not existed
    if(user===null){
        return res.status(404).json({message:"invalid email"})
    }
    //compare the passwords if not null
    //plan password will convert into hash(hash will not converted to plan becz it is irreversible)
    let result = await compare(password,user.password)
     // if pass not matched
     if(result===false){
        return res.status(400).json({message:"invalid pass"})
     }
     //if pass was matched
     //create take(jwt)
    const signedToken = sign({email:user.email},"abcdef",{expiresIn:"1h"})
    //store token as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    // send  taken in res(back to client)
    res.status(200).json({message:"login success",payload:user})


})


    //Create new User
userApp.post("/users",async(req,res)=>{
    //get new user obj from req
    const newUser=req.body;
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace plain password with hashed password
    newUser.password=hashedPassword
    //Create new user document
    const newUserDocument = new UserModel(newUser)
    //save
    await newUserDocument.save()
    //send res
    res.status(201).json({message: "User Created"});
});

//read all users
userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let usersList = await UserModel.find();
    //send res
    res.status(200).json({message:"users",payload:usersList})
})

//read user by email
userApp.get("/user",verifyToken,async(req,res)=>{
    // //read obj id  from req params
    // const uid =req.params.id;

    //read user email from req
    const emailOfUser=req.user?.email;
    //find user by id
    const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product")
    //if user not found
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"user",payload:userObj})
})

//update a user by id
userApp.put("/users/:id",async(req,res)=>{
    //get modified user from 
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find user by id & update
    const updatedUser=await UserModel.findByIdAndUpdate(
        uid,
        {$set:{...modifiedUser}},
        {new :true,runValidators:true}
    )
    //send res
    res.status(200).json({message:"User modified",payload:updatedUser})
})

//delete user by id
userApp.delete("/users/:id",async(req,res)=>{
    //get uid
    const uid=req.params.id;
    //find and delete user by id
    const deleteUser=await UserModel.findByIdAndDelete(uid)
    if(!deleteUser){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"User Deleted",payload:deleteUser})
})

userApp.put("/cart/product-id/:pid",async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    //get current user details
    const emailOfUser=req.user?.email
    // //get user from db
    // const user=await UserModel.findOne({email:emailOfUser})
    // //if user is invalid\
    // if(!user){
    //     return res.status(404).json({message:"User not found"})
    // }

    let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    
    //if user invalid
      if(!result){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"product added to cart"})
})


// userApp.put("/cart/product-id/:pid",async(req,res)=>{
//     //get product id from url param
//     let productId=req.params.pid;
//     //get current user details
//     const emailOfUser=req.user?.email
//     //get user from db
//     const user=await UserModel.findOne({email:emailOfUser})
//     //if user is invalid\
//     if(!user){
//         return res.status(404).json({message:"User not found"})
//     }

//     //add product to cart
//     //before add,first it should check that product is already in the cart
//     //if the product is there ,then increment count by 1
    
    
//     //otherwise add that product to cart
//     let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
    
//     //if user invalid
//       if(!result){
//         return res.status(404).json({message:"User not found"})
//     }
//     res.status(200).json({message:"product added to cart"})
// })