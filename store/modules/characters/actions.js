import * as types from './mutationTypes'
import charactersApi from '../../../api/characters'
import giphyApi from '../../../api/giphy'
import planetsApi from '../../../api/planets'
import { addPlanet } from '../planets/actions'
import * as planetsTypes from './mutationTypes'

function getImageUrl(images) {
  if (images && images.data && images.data.length) {
    const max = images.data.length - 1
    const index = Math.floor(Math.random() * (max - 0) + 0)
    return images.data[index].images['480w_still'].url
  } else return ''
}

async function getCharacters({ commit, dispatch, rootGetters }, data = {}) {
  const response = await charactersApi.getCharacters(data.url)
  const characters = response.results
  const updatedCharacters = await Promise.all(
    characters.map(async item => {
      const images = await giphyApi.getImages(item.name)
      //const planet  = await planet
      const imageUrl = getImageUrl(images)
      const updatedItem = { ...item, avatar: imageUrl }
      return updatedItem
    })
  )
  commit(types.SET_DATA, { ...response, results: updatedCharacters })
  let planets = [...rootGetters['planets/getPlanets']]
  await Promise.all(
    updatedCharacters.map(async item => {
      const exist = planets.find(planet => planet.url === item.homeworld)
      if (!exist) {
        planets.push({ url: item.homeworld })
        dispatch('planets/addPlanet', { url: item.homeworld }, { root: true })
      }
    })
  )
}

export default { getCharacters }
