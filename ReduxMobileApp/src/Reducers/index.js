import { combineReducers } from 'redux'
import NewsReducer from './NewsReducer'
import PeopleReducer from './PeopleReducer'

const rootReducers = combineReducers({
  news: NewsReducer,
  people: PeopleReducer
})

export default rootReducers
