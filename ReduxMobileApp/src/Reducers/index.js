import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer'

const rootReducers = combineReducers({
  news: NewsReducer,
})

export default rootReducers
