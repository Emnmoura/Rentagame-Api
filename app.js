
const express = require('express');

const app = express();

app.get('/home',(request, response) => {
    console.log(request);
    response.send('<h1>RentAGame</h1>');
});

app.listen(3000, () => console.log('Servidor boladão ON porta 3000'));