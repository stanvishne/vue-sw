const defaultUrl = 'https://swapi.co/api/people'
export default {
  getCharacters: url => {
    const fetchUrl = url ? url : defaultUrl
    return fetch(`${fetchUrl}`).then(function(response) {
      return response.json()
    })
  }
}
