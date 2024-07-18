import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { up_vote } from '../reducers/anecdoteReducer'
import { anecdote } from '../reducers/notificationReducer'
const AnecdoteList = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(state => {
    return state.anecdote.filter(anecdote => anecdote.content.includes(state.filter))

  })


  const handleClick  = (id) =>{
    dispatch(up_vote(id))
    dispatch(anecdote(id))
  }

  const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)


  return (
    <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => handleClick(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
    </>
  )
}

export default AnecdoteList