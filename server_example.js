var http = require('http')
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write("Hello World ")
    res.write("<b> Use of B tag </b>")
    res.write("Bye")
}).listen(3000)
console.log("Server started http://127.0.0.1:3000")