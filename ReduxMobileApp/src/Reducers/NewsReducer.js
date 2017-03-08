import { FETCH_NEWS, FILTER_NEWS } from '../Constants'

let data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    objectID: 1
  },
  {
    title: 'StarGate',
    url: 'syanmil.com',
    author: 'Syanmil',
    objectID: 2
  }
]

export default (state = data, action) => {
  switch (action.type) {
    case FILTER_NEWS:
        if (action.keyword){
          let cut = new RegExp(`${action.keyword}`, 'i')
          return (
            state.filter((item) => cut.test(item.title))
          )
        }
        return state
    case FETCH_NEWS:
        return action.data
    default:
      return state
  }
}
