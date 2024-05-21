// create web server
var express = require('express');
var app = express();
// create server
var server = require('http').createServer(app);
// create socket.io
var io = require('socket.io')(server);

// listen port 3000
server.listen(3000);

// set view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

// routing
app.get('/', function(req, res) {
    res.render('home');
});

// create array to store comments
var comments = [];

// listen connection event
io.on('connection', function(socket) {
    // send comments to client
    socket.emit('server-send-comment', comments);

    // listen add-comment event
    socket.on('client-send-comment', function(data) {
        comments.push(data);
        io.sockets.emit('server-send-comment', comments);
    });
});