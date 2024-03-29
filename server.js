'use strict';
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./config');
const chatRoutes = require('./routes/chat-routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

app.use('/sca-ai-assistant-microservice/v1', chatRoutes.routes)

app.listen(config.port, () => console.log('App is listening on url ' + config.url));