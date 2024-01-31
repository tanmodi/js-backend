require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
  res.send('https://github.com/tanmodi')
})

app.get('/linkedin', (req, res) => {
  res.send('<h1><a href="https://www.linkedin.com/in/tanmodi/">https://www.linkedin.com/in/tanmodi/</a></h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})