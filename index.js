const express = require('express');

let app = express();


app.get('/home', (req, res)=> res.send("Hello World!"));

app.listen(3000, ()=> console.log('Running server on port 3000'));