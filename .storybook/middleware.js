const proxy = require('http-proxy-middleware')

module.exports = function expressMiddleware (router) {
  router.use(
    ['/graphql', '/dist', '/packages', '/api'],
    proxy({
      target: 'http://localhost:3999',
      changeOrigin: true
    })
  )
}
