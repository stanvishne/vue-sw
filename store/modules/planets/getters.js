export default {
  getPlanets: state => state.data.results,
  getNext: state => state.data.next,
  getPrevious: state => state.data.previous
}
