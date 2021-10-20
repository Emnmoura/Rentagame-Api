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
const authRouter = require('./routes/Auth.routes')
const clientRouter = require('./routes/Client.routes')
const userRouter = require('./routes/User.routes') 

//rotas publicas
app.use('/', authRouter)


//Autenticação
app.use(userMiddleware);

//rotas privadas
app.use('/game', gameRouter)
app.use('/location', locationRouter)
app.use('/client', clientRouter)
app.use('/user', userRouter)



app.listen(process.env.PORT, () => console.log(`Server listen UP Port ${process.env.PORT}`));