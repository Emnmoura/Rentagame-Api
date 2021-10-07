const mongoose = require('mongoose');



const MONGO_URI ="mongodb+srv://admin:123@cluster0.xwrwg.mongodb.net/test"


const connect = async () => {  
   const connection = await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

   console.log(`DataBase connected: ${connection.connections[0].name}`);
   
 };

 connect();