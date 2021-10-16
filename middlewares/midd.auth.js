
//const jwt = require("jsonwebtoken");

//const auth = (request, response, next) => {
 //   const token = request.get('Authorization');

   // if(!token) {
   //     resquest.status(401).json({msg: 'Request without token'});
   //     return;
  //  }

   // const tokenWithoutBearer = token.split(' ')[1];
    
  //  try {
  //      const decodedToken = jwt.verify(tokenWithoutBearer, process.env.SECRET_JWT)
  //      request.user = {...decodedToken};
   //     next();
  //  } catch (error) {
  //      request.status(401).json({msg: 'Unauthorized'});
  //      }

//};
//module.exports = auth;