const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', (req, res) => {
  res.send('<h1>Olá Mundo</h1>')
})

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
