import * as types from './mutationTypes'
import charactersApi from '../../../api/characters'
import giphyApi from '../../../api/giphy'

async function getCharacters({ commit, url = '' }, data = {}) {
  console.log('getCharacters')
  // const { url } = data
  const response = await charactersApi.getCharacters(data.url)
  const characters = response.results
  const updatedCharacters = await Promise.all(
    characters.map(async item => {
      const images = await giphyApi.getImages(item.name)
      const imageUrl = images.data[0].images['480w_still'].url
      const updatedItem = { ...item, avatar: imageUrl }
      return updatedItem
    })
  )
  commit(types.SET_DATA, { ...response, results: updatedCharacters })
}

export default { getCharacters }
