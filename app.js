const express = require('express');

const PORT = 5000;

require('./config/db-config')



const app = express();

app.listen(PORT, () => console.log(`Servidor boladão ON porta ${PORT}`));