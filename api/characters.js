const url = 'https://swapi.co/api/people'
export default {
  getCharacters: () => {
    return fetch(`${url}`).then(function(response) {
      return response.json()
    })
  }
}
