import {User} from '../models/userModel.js'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken'



export const registerUser = asyncHandler( async(req,res) =>{
    const {username, name, email, phoneNo, password} = req.body
    
    if([username, name, email, phoneNo, password].some((field) => 
        field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    if(phoneNo.length < 10){
        throw new ApiError(400, "Invalid Phone Number")
    }

    if(typeof password !== 'string' || password.length < 8 ){
        throw new ApiError(400, "Password must be at least 8 characters long")
    }

    const existedUser = await User.findOne({email})
    if(existedUser){
        throw new ApiError(409, "User already exist")
    }

    const user = await User.create({
        username,
        name,
        email,
        phoneNo,
        password,
    })

    const createdUser = await User.findById(user._id).select(
        "-password"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering")
    }
    else{
        return res.status(201).json(
            new ApiResponse(201, createdUser, "User created successfully")
        )
    }
    })

export const loginUser = asyncHandler( async (req,res) =>{
    
    const {email, password} = req.body

    if([email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    if(typeof password !== "string" || password.length < 8){
        throw new ApiError(400, "Password must be at least 8 characters long")
    }
    
    const user = await User.findOne({email})

    if(!user){
        throw new ApiError(404, "User not registered")
    }

    const isMatch = await user.isPasswordCorrect(password)

    if(!isMatch){
        throw new ApiError(401, "Incorrect password")
    }

    const token = jwt.sign(
        {id : user._id},
        process.env.JWT_SECRET,
        { expiresIn: "7d"}
    )

    res.cookie("token", token,{
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })
    
    res.status(200).json(
        new ApiResponse(200, "User logged in Successfully")
    )
    })

export const logoutUser = (req,res)=>{
    res.cookie("token","",{
        httpOnly: true,
        expires: new Date(0),
        sameSite: "lax"
    })

    res.status(200).json(
        new ApiResponse(200,null, "LogOut Successfully")
    )
}    

export const verifyUser = asyncHandler( async(req,res) =>{
    const userId = req.user?.id;

    const user = await User.findById(userId);
    res.status(200).json(
        new ApiResponse(200, user, "User Verified"));
})





