import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const generateId = () =>{
    return String(Math.floor(Math.random() * 100))
}
const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) =>{
    console.log(content)
    const newObj = {
        content,
        votes:0,
        id:generateId()
    }
    const response = await axios.post(baseUrl, newObj)
    return response.data
}

export { getAll, createNew}