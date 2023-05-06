'use strict';
const axios = require('axios');
const config = require('../config');

const headers = config.api_openai_header

const sendMessage = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            res.status(400).json({ message: "body is missing" })
        } else {
            if (req.body.question == null || typeof req.body.question !== 'string' || req.body.question === "") {
                res.status(400).json({ message: "malformed request" })
            } else {
                const data = {
                    model: config.api_model,
                    "messages": [{"role": "assistant", "content": req.body.question}]
                  }

                  await axios.post(config.api_url, data, { headers })
                  .then(response => {
                    console.log(response.data.usage)
                    res.status(200).json({
                        message: response.data.choices[0].message.content
                    })
                  }).catch(error => {
                console.error(error);
                res.send({ message: error })
              });
            }
        }
    } catch (err) {
        console.warn(err)
        res.status(500).json({ message: 'server error' })
    }
}

module.exports = {
    sendMessage
}