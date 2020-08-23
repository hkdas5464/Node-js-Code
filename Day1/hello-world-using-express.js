const express = require('express');
//install express using npm install --save express

const app = express();

const port = 3000;
app.get('/', function (req, res) {
    res.send('Hello-World-Using-Express :)');
});
app.listen(port, function () {
    console.log('Server is Running at http://localhost:' + port + ' :)');
});