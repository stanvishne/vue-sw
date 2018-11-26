import * as types from './mutationTypes'

export default {
  [types.SET_DATA](state, payload) {
    state.data = payload
  },
  [types.ADD_ITEM](state, payload) {
    state.data.results.push(payload)
  }
}
