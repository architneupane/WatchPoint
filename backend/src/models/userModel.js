import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
     username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
     },
     email: {
        type: String,
        required: true,
        unique: true,
     },
     phoneNo: {
        type: Number,
        required: true,
        unique: true,
     },
     password:{
        type: String,
        required: true,
     }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))  return next()
    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
     } catch (error) {
        next(error)
     }
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)