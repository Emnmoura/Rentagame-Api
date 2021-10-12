require('dotenv').config();

const express = require('express');

const cors = require('cors');

require('./config/db.config')
const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log(`Server listen UP Port ${process.env.PORT}`));