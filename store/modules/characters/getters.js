export default {
  getCharacters: state => state.data.results,
  getNext: state => state.data.next,
  getPrevious: state => state.data.previous
}
