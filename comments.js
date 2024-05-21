// create web server
const http = require('http');

// create server object
const server = http.createServer((req, res) => {
    // if the url is /comments
    if (req.url === '/comments') {
        // write status code 200
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // write json object
        res.write(JSON.stringify([
            { name: 'John', message: 'Hello' },
            { name: 'Jane', message: 'Hi' }
        ]));
        // end response
        res.end();
    } else {
        // write status code 404
        res.writeHead(404, { 'Content-Type': 'text/html' });
        // write message
        res.write('404 Not Found');
        // end response
        res.end();
    }
});

// run server on port 3000
server.listen(3000);
console.log('Server is running on port 3000');
