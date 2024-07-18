import { createSlice } from "@reduxjs/toolkit"

// const filterReducer = (state='',action) =>{
//     switch(action.type){
//         case "SET_FILTER":
//             return action.payload
//         default:
//             return state
//     }
// }

// export const filterChange = (content) =>{
    //     return {
    //         type:'SET_FILTER',
    //         payload:content
    //     }
    // }

// const initialState = 'If'
const filterSlice = createSlice({
    name:"filter",
    initialState:'',
    reducers:{
        filterReducer(state,action){
            return action.payload
        }
    }
})

 
export const { filterReducer } = filterSlice.actions
export default filterSlice.reducer