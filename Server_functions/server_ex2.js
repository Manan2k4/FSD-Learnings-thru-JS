var http = require('http')

http.createServer((req, res) => {
    if(req.url == '/home'){
        res.end("<h1> Home Page </h1>")
    }
    else if(req.url == '/about'){
        res.end("<h1> About Page </h1>")
    }
    else {
        res.end("<h1> Welcome Page </h1>")
    }
}).listen(4000)
console.log("Server started @ http://127.0.0.1:4000")