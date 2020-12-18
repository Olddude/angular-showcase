const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = express()

api.use(logger('dev'))
api.use(bodyParser.json())
api.use(cors({
  origin: process.env.NODE_ENV === 'production'
    ? 'https://angular-showcase.herokuapp.com'
    : 'http://localhost:4200',
  optionsSuccessStatus: 200
}))

api.use('/v1', require('./src/routes/v1'))

const port = process.env.PORT || 8080

api.listen(port, () => {
  console.log(`processary-server is listening on ${port}`)
})
