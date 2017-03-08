import { FETCH_NEWS, FETCH_PEOPLE } from '../Constants'

export const sendData = (data) => ({type: FETCH_NEWS, data});
export const sendPeople = (people) => ({type: FETCH_PEOPLE, people});

export const fetchData = (data) => {
  return (dispatch)=> {
    let uri = encodeURI(data)
    fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
      .then(response => response.json())
      .then(json => dispatch(sendData(json.hits)))
  }
}
export const fetchPeople = () => {
  return (dispatch) => {
    fetch(`https://swapi.co/api/people`)
      .then(respone => respone.json())
      .then(json => dispatch(sendPeople(json.results)))
  }
}
