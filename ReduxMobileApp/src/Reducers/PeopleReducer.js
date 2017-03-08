import { FETCH_PEOPLE } from '../Constants'

const InitialPeople = [
  {name: 'Luke'},
  {name: 'Sky'},
  {name: 'Walker'},
  {name: 'Mordor'},
  {name: 'Gobs'}
]

export default (state = InitialPeople, action) => {
  switch (action.type) {
    case FETCH_PEOPLE:
        return action.people
    default:
      return state
  }
}
