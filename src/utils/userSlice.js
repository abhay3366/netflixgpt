import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
     initialState: JSON.parse(localStorage.getItem("user")) || null,
    reducers:{
        addUser:(state,action)=>{
            localStorage.setItem("user", JSON.stringify(action.payload));
            return action.payload
        },
        removeUser:(state)=>{
             localStorage.removeItem("user");
            return null
        }
    }

})
export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer