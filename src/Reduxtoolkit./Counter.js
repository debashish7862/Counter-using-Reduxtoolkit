import { createSlice } from "@reduxjs/toolkit";
const counter =createSlice({
    name:'data',
    initialState:{
        counter:1,
        data:4
    
    },
    reducers:{
        increment:(state,actions)=>{
            state.counter=state.counter+actions.payload
        },
        decrement:(s)=>{
            s.counter=s.counter-1
        },
        reset:(s)=>{
            s.counter=0
        }
    }
})
export const {increment,decrement,reset}=counter.actions
export default counter.reducer