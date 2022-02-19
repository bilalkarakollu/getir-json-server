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

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('JSON Server is running')
})