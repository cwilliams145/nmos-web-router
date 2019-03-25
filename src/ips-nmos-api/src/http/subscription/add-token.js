module.exports = () => {
  const TOKEN_KEY = 'accessToken'
  if (!window.sessionStorage) {
    console.error('Please use a browser that supports Session Storage')
    return
  }

  return {
    fetch () {
      if (window.sessionStorage.getItem(TOKEN_KEY)) {
        let accessToken = window.sessionStorage.getItem(TOKEN_KEY)
        return accessToken
      }
    },
    addAuthHeaders (headers) {
      let accessToken = this.fetch()
      let authString = `Bearer ${accessToken}`
      if (headers) headers['Authorization'] = authString
      else headers = {'Authorization': authString}
      return headers
    },
    addAuthQuery (url) {
      let accessToken = this.fetch()
      url.searchParams.append('authorization', `Bearer ${accessToken}`)
      return url
    }
  }
}
