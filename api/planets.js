const defaultUrl = 'https://swapi.co/api/planets/'
export default {
  getPlanets: url => {
    const fetchUrl = url ? url : defaultUrl
    return fetch(`${fetchUrl}`).then(function(response) {
      return response.json()
    })
  },
  getPlanet: url => {
    return fetch(`${url}`).then(function(response) {
      return response.json()
    })
  }
}
