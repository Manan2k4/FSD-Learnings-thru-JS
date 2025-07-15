var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    //Read file
    fs.readFile("server-conn-ex.html", 'utf-8', function(err, data) {
        console.log(data)
        res.end(data)
    })
}).listen(5000)

console.log("Server @ http://127.0.0.1:5000")