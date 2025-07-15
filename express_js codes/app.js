const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  res.send(__dirname+'/home.html')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app @ http://127.0.0.1:${port}`)
})
