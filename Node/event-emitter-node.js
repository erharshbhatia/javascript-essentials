const http = require('http');
const events = require('events');

const myEmitter = new events.EventEmitter();

myEmitter.on('event', () => {
    console.log('Event fired!');
});


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("This is the response from the server") 
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about') {
        myEmitter.emit('event');
        res.end('Here is our short history');
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>
    `);
    }
});

server.listen(5000, () => console.log('Server is listening on port 5000...'));
