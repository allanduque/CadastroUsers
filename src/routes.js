const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)
routes.delete('/users/:user_id', UserController.delete)

routes.post('/users/:user_id/addresses', AddressController.store)
routes.get('/users/:user_id/addresses', AddressController.index)
routes.delete('/users/:address_id/addresses', AddressController.delete)


routes.get('/', (req, res) =>{
    return res.json({ola: "mundo"})
})

module.exports = routes