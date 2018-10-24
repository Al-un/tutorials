// V4
//server.js
const express = require('express'),
    server = express(),
    users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

server.get('/users', (request, response) => {
    response.json(users);
});

//Binding to localhost://3000
server.listen(3000, () => {
    console.log('Express server started at port 3000');
});


// V3
/*
//server.js
const express = require('express'),
    server = express();

server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request, response) => {
    response.send('Home page');
});

server.get('/about', (request, response) => {
    response.send('About page');
});

//Express error handling middleware
server.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

//Binding to a port
server.listen(3000, () => {
    console.log('Express server started at port 3000');
});
*/


// V2
/*
const http = require('http'),
    url = require('url'),

    makeServer = function (request, response) {
        let path = url.parse(request.url).pathname;
        console.log(path);
        if (path === '/') {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('Hello World');
        }
        else if (path === '/about') {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('About page');
        }
        else if (path === '/blog') {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('Blog page');
        }
        else {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.write('ERROR page');
        }
        response.end();
    },
    server = http.createServer(makeServer);
server.listen(3000, () => {
    console.log('Node server created at port 3000');
});
*/

// V1
/*
const http = require('http'),
    server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world');
    res.end();
});

server.listen(3000, () => {
    console.log('Node server created at port 3000')
});
*/