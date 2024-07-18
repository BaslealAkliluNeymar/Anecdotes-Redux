import {  useSelector } from "react-redux"
const Notification = () => {

    const filteredReduced = useSelector(({anecdote, filter, notification}) => {
        return anecdote.find(data => data.id === notification)
    })
    

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        <p>You Voted for : 
         {filteredReduced?.content}
        </p>
      </div>
    )
  }
  
  export default Notification