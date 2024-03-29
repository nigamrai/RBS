import { Schema, model } from "mongoose";

const userSchema=new Schema({
    fullName:{
        type:String,
        minLength:[5,"User's fullname should have minimum 5 characters"],
        maxLength:[50,"User's full name length should be less than 50 characters"],
        trim:true,
        required:[true,"FullName is required"]
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:[true,"Email is required"],
        trim:true
    },
    mobileNumber:{
        type:String,
        unique:true,
        required:[true,"Mobile number is required"],
        minLength:[10,"Mobile Number should have atleast 10 digits"],
        maxLength:[14,"Mobile Number should not have more than 14 digits"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        select:false
    }
},{timestamps:true});
const User=model('User',userSchema,'users');
export default User;