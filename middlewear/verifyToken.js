// const jwt = require("jsonwebtoken");
//verify TOKEN
// function verifyToken(req,res,next){
//     //get authheader value
//     const authHeader = req.headers.authorization;
    
//     //check authheader is undefined
//     if(authHeader===null){
//        res.status(401).send({error:"no token provided"})
//     }
//     //split at space and get token from array
//     const token = authHeader && authHeader.split(' ')[1];
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,function(err,decoded){
//        if(err){
//           res.status(500).send({error:"authentication failed"})
       
//        }else{
//           next()
//        }
//     })
//  }