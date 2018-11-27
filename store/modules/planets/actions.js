import * as types from './mutationTypes'
import planetsApi from '../../../api/planets'
import * as planetTypes from '../../../store/modules/planets/mutationTypes'
import giphyApi from '../../../api/giphy'

function getImageUrl(images) {
  if (images && images.data && images.data.length) {
    const max = images.data.length - 1
    const index = Math.floor(Math.random() * (max - 0) + 0)
    return images.data[index].images['480w_still'].url
  } else return ''
}

async function getPlanets({ commit }, data = {}) {
  const response = await planetsApi.getPlanets(data.url)
  const updatedPlanets = await Promise.all(
    response.results.map(async item => {
      const images = await giphyApi.getImages(item.name)
      //const planet  = await planet
      const imageUrl = getImageUrl(images)
      const updatedItem = { ...item, avatar: imageUrl }
      return updatedItem
    })
  )
  commit(types.SET_DATA, { ...response, results: updatedPlanets })
}

export async function addPlanet({ commit }, data = {}) {
  const planet = await planetsApi.getPlanet(data.url)
  console.log('geting planet', planet)
  commit(planetTypes.ADD_ITEM, planet)
}

export default { getPlanets, addPlanet }
