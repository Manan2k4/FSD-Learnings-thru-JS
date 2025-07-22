const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.sendFile(__dirname+'/home.html')
})
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/about.html')
})
app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
})

app.listen(port, () => {
  console.log(`Example app @ http://127.0.0.1:${port}`)
})

// http://127.0.0.1:3000/product/a/1
app.get('/product/:id/:id1', (req, res) => {
  var id = req.params.id
  var id1 = req.params.id1
  res.send("Parameter Value is: " +id + ", " + id1)
})

// http://127.0.0.1:3000/search
app.get('/search', (req, res) => {
  var qq = req.query.q
  res.send("QueryString Value is: "+qq)
})

app.get('/sum', (req, res) => {
  res.sendFile(__dirname + '/sumdemo.html')
})

app.get('/sumprocess', (req, res) => {
  var a = req.query.txt1
  var b = req.query.txt2
  var c = parseInt(a) + parseInt(b)
  res.send(`A value is ${a} <br/>B value is ${b} <br/>Sum is ${c}`)
})