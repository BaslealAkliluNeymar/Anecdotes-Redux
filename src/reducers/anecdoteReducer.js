import { createSlice,current } from "@reduxjs/toolkit"
import { getAll } from "../services/anecdoteService"
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }


// export const up_vote = (id) =>{
//   return {
//     type:'UP_VOTE',
//     payload:{
//       id:id
//     }
//   }
// }


// export const create = (data) =>{
//   return {
//     type:'CREATE',
//     payload:{
//       content:data,
//       votes:0,
//       id:getId()
//     }
//   }
// }
// const initialState = anecdotesAtStart.map(asObject)

// console.log(initialState)
// const reducer = (state = initialState, action) => {
//   if (action.type === 'UP_VOTE'){
//     const found = state.find(data => data.id === action.payload.id)
//     const incremented = {
//       ...found,
//       votes:found.votes + 1
//     }
    
//     return state.map(data => data.id !== action.payload.id ? data : incremented)
   
//   }
//   else if (action.type === 'CREATE'){
//       const newState = {
//         ...action.payload,
//       }
//       return state.concat(newState)
//   }
//   else{
//     return state
//   }
// }


const anecdoteSlice = createSlice({
  name:'anecdote',
  initialState:[],
  reducers:{
    up_vote(state, action){
      const found = state.find(data => data.id === action.payload)
      console.log(found)
      const incremented = {
          ...found,
          votes:found.votes + 1
      }

      return state.map(data => data.id !== action.payload ? data : incremented)
    },
    create(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})


export const { up_vote, create, setAnecdotes } = anecdoteSlice.actions
export const initialState1 = () => {
  return async dispatch => {
    const notes = await getAll()
    console.log(notes)
    dispatch(setAnecdotes(notes))
  }
}
export default anecdoteSlice.reducer