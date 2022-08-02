const jwt = require("jsonwebtoken");
const accessTokenCreated= require ("../controller/validation.controller")





async function verifyToken(req,res,next){
    //get authheader value
 try{
   const authHeader= req.headers['authorization'];
   const token = authHeader.split(" ")[1]
   // console.log(token,"token");
   // console.log(authHeader,"token-----------------------------------------------");
   if(!token){
      return res.json({success:false,message:'invalid token'}).status(401);
   }
  jwt.verify(token,"secrettoken",function(err,decoded){
   if(err){
      console.log(err);
      return res.json({success:false,message:'failed to authenticate'}).status(500);      
   }
   console.log(decoded);
  })
  next()
 }catch{
    res.send({success:false,error:"authentication failed"})
 }
 }

 module.exports={
    verifyToken
 }
























//  async function verifyToken(req,res,next){
//     try{
//         console.log(req.body)
//         const token = req.body.token
//         console.log(token,"------------------------------------------------");
        
//     jwt.verify(token,"secrettoken",function(err,decoded){
//         if(err){
//             res.send({error:"authentication failed"})
        
//         }else{
//             res.send(decoded)
//             next()
//         }
//      })

//     }catch{
//         res.status(403).send({error:"authentication failed"})
//     }
// }