const KEY = 'wbiqLWXWGVJVgDszE3isI6UQQwz7XeIZ'
//const _url=`https://api.giphy.com/v1/gifs/search?api_key=&q=cats&limit=25&offset=0&rating=G&lang=en`
const url = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&limit=25&offset=0&rating=G&lang=en`
export default {
  getImages: query => {
    return fetch(`${url}&q=${query}`).then(function(response) {
      return response.json()
    })
  }
}
