import * as types from './mutationTypes'
import planetsApi from '../../../api/planets'
import * as planetTypes from '../../../store/modules/planets/mutationTypes'
async function getPlanets({ commit }, data = {}) {
  commit(types.SET_DATA, {})
}

export async function addPlanet({ commit }, data = {}) {
  const planet = await planetsApi.getPlanet(data.url)
  console.log('geting planet', planet)
  commit(planetTypes.ADD_ITEM, planet)
}

export default { getPlanets, addPlanet }
