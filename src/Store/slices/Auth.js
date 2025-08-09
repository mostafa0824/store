import { createSlice } from "@reduxjs/toolkit"

const gettoken=localStorage.getItem('token')
const initialState={
    token:gettoken
}
const AuthSlice=createSlice({
    name:'AuthSlice',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.token=action.payload
            localStorage.setItem('token',state.token)
        },
        logout:(state)=>{
            state.token=null
            localStorage.removeItem('token')
        }
    }
})

export const{login,logout}=AuthSlice.actions
export default AuthSlice.reducer