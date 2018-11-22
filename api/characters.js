export default {
  getCharacters: () => {
    return fetch('characters.json').then(function(response) {
      return response.json()
    })
  }
}
