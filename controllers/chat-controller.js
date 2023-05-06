'use strict';
const axios = require('axios');
const config = require('../config');

const headers = config.api_openai_header

const sendMessage = async (req, res, next) => 
{
    res.send({"message": "test"});
}

module.exports = {
    sendMessage
}