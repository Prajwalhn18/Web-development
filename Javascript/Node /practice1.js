const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, This message is from Node');
});

const server = app.listen(3000, () =>
    console.log('The server is up and running')
);

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('The server is terminated');
    });
});

process.kill(process.pid, 'SIGTERM');
