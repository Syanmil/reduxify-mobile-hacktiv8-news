import { FETCH_NEWS } from '../Constants'

export const sendData = (data) => {type: FETCH_NEWS, data}
export const sendPeople = (People) => {type: FETCH_PEOPLE, people}

export const fetchData = (data) => {
  return (dispatch)=> {
    let uri = encodeURI(data)
    fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
      .then(response => response.json())
      .then(json => dispatch(sendData(json.hits)))
  }
}
export const fetchPeople = (people) => {
  return (dispatch) => {
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(items => dispatch(sendPeople(items.results)))
  }
}
