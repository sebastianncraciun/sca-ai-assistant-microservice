const express = require('express')

const { sendMessage } = require('../controllers/chat-controller')

const router = express.Router()

router.post('/sendMessage', sendMessage)

module.exports = {
    routes: router
}