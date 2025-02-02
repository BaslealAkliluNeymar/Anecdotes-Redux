import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
// import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

// const combination = combineReducers({
//   anecdote:reducer,
//   filter:filterReducer
// })
const store = configureStore({
  reducer: {
    anecdote:anecdoteReducer,
    filter:filterReducer,
    notification:notificationReducer
  }
})


console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)