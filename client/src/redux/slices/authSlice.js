import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    data:localStorage.getItem==undefined?JSON.parse(localStorage.getItem('data')):{} || {},
}
export const userLogin=createAsyncThunk("auth/login",async(data)=>{
    try{
        const res=axiosInstance.post("user/login",data);
        toast.promise(res,{
            loading:"Authentication in progress",
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to login"
        })
        return (await res).data;
    }catch(error){
        return error?.response?.data?.message
    }
})
export const createAccount=createAsyncThunk('auth/register',async(data)=>{
    
})
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(userLogin.fulfilled,(state,action)=>{
              if(action?.payload?.user){
                localStorage.setItem("isLoggedIn",true);
                localStorage.setItem("data",JSON.stringify(action?.payload?.user));
                state.isLoggedIn=true;
                state.data=action?.payload?.user;
              }
        })
    }
})

export const {}=authSlice.actions;
export default authSlice.reducer;