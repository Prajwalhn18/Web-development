const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, This is from Node');
});

app.get('/api', (req, res) => {
    res.send('This the route for APIs');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The server is up and running at ${port}`));
