import * as types from './mutationTypes'

export default {
  [types.SET_DATA](state, payload) {
    state.data = payload
  }
}
