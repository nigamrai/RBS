import { Schema,model } from "mongoose";

const tokenSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,ref:'user'
    },
    token:{
        type:String,
        required:[true,"Token is required"]
    }
},{timestamps:true})

const Token=model("Token",tokenSchema,"tokens");
export default Token;