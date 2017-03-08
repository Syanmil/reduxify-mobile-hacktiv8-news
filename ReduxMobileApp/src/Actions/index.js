export const typeSearch = (keyword) => {
  return {
    type: 'FILTER_NEWS',
    keyword
  }
}

export const sendData = (data)=> {
  return {
    type: 'FETCH_NEWS',
    data
  }
}

export const fetchData = (data) => {
  return (dispatch)=> {
    let uri = encodeURI(data)
    fetch(`https://hn.algolia.com/api/v1/search?query=${uri}`)
      .then(response => response.json())
      .then(json => dispatch(sendData(json.hits)))
  }
}
