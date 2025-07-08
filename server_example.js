var http = require('http')
var a = 10
var b = 20
var c = a+b
var msg = ''
if(c == 30) {
    msg = 'C value = 30'
}
else {
    msg = 'C value != 30'
}
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write("<b>Hello World </b>")
    res.write(`<br/>A value: ${a} <br/> B value: ${b} <br/> Sum is ${a + b} <br/>`)
    res.write(msg)
    res.write("<br/>Bye")
}).listen(3000)
console.log("Server started http://127.0.0.1:3000")