import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "../config";
import Token from "../models/token.model";
class jwtUtil{
    generateTokens(payload){
        const accessToken=jwt.sign(payload,ACCESS_TOKEN_SECRET,{expiresIn:'1h'})
        const refreshToken=jwt.sign(payload,REFRESH_TOKEN_SECRET,{expiresIn:'1y'})
        return {accessToken,refreshToken}
    }
     async storeRefreshToken(userId,token){
     try{
        await Token.create({
            userId,
            token
        })
     }catch(error){
        console.log(error.message);
     }

    }
}
const jwtService=new jwtUtil();
export default jwtService;