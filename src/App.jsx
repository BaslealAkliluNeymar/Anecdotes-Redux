import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useState, useEffect} from 'react'
import { getAll } from './services/anecdoteService'
import { useDispatch,useSelector } from 'react-redux'
import { create, setAnecdotes } from './reducers/anecdoteReducer'
const App = () => {
  const data = useSelector(({anecdote, filter , notification}) => (notification))
  const [reduce, setReduce] = useState(false)
  const dispatch = useDispatch()

  useEffect(() =>{
    getAll()
    .then(anecdote => 
      dispatch(setAnecdotes(anecdote))
    )
  },[])
    
  useEffect(() =>{
    setReduce(true)
    setTimeout(() =>{
      setReduce(false)
    },3000)
  },[data])
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {reduce && <Notification />}
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}


export default App