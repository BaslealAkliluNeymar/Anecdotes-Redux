import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { createNew } from '../services/anecdoteService'
const AnecdoteForm = ({anecdote}) => {
  const dispatch = useDispatch()
  const handleSubmit =  async (e) =>{
    e.preventDefault()
    const newObj = await createNew(e.target.create.value)
    dispatch(create(newObj))
  }
  return (  
    <div>
        <h2>create new</h2>
        <form onSubmit={handleSubmit}>
            <div><input name="create"  /></div>
            <button>create</button>
        </form>
    </div>
  )
}

export default AnecdoteForm