import { createSlice } from "@reduxjs/toolkit";


const notificationSlice = createSlice({
    name:'notify',
    initialState:'',
    reducers:{
        anecdote(state,action){
            return action.payload
        }
    }
})


export const { anecdote } = notificationSlice.actions
export default notificationSlice.reducer