require('dotenv').config();

const express = require('express');

const cors = require('cors');

require('./config/db.config')
const app = express();
app.use(express.json());
app.use(cors());

//puxando as rotas
const gameRouter = require('./routes/Game.routes')
const locationRouter = require('./routes/Location.routes')

//rotas
app.use('/', gameRouter)
app.use('/', locationRouter)


app.listen(process.env.PORT, () => console.log(`Server listen UP Port ${process.env.PORT}`));