// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/marka/:slug': '/companies?slug=:slug'
  }))

server.use(router)
server.listen(8000, () => {
  console.log('JSON Server is running')
})