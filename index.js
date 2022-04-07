const http = require('http')
const fs = require('fs')

const PORT = 8080

const server = http.createServer((req, res) => {
    console.log('Request has been made from browser to server');
    res.setHeader('Content-Type', 'text/html');

    let path = './public';
    switch(req.url) {
        case '/':
            path += '/index.html'
            break;
        case '/about':
            path += '/about.html'
            break;
        case '/contact-me':
            path += '/contact-me.html'
            break;
        default:
            path += '/404.html'
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, content) => {
        if (err) {
            console.log(err);
        } else {
            res.write(content);
            res.end();
        }
    })
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
    console.log('http://localhost:8080/');
})