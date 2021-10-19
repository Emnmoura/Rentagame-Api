require('dotenv').config();
const morgan =require('morgan');

const express = require('express');

const cors = require('cors');

require('./config/db.config')
const app = express();

app.use(morgan('dev'))

const userMiddleware = require('./middlewares/user.middleware');

app.use(express.json());
app.use(cors());


//puxando as rotas
const gameRouter = require('./routes/Game.routes')
const locationRouter = require('./routes/Location.routes')
const userRouter = require('./routes/User.routes')

//rotas publicas
app.use('/', userRouter)

//Autenticação
app.use(userMiddleware);

//rotas privadas
app.use('/', gameRouter)
app.use('/', locationRouter)



app.listen(process.env.PORT, () => console.log(`Server listen UP Port ${process.env.PORT}`));