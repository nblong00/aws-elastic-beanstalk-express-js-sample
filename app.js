const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('It is me, Blaise (i have changed this message again)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
