const express = require('express')

const app = express()

const wwwPub = './dist/angular-showcase'
const startPage = 'index.html'

app.use(express.static(wwwPub))

app.get('/*', (_req, res) => {
  res.sendFile(startPage, { root: wwwPub })
})

const port = process.env.PORT || 4200

app.listen(port, () => {
  console.log(`angular-showcase is listening on ${port}`)
})
