const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('../build'))

app.listen(port, () => {
  console.log(`Serving site to http://localhost:${port}`)
})