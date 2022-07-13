const jwt = require("jsonwebtoken");
const authModel = require('../models/validation')
const bcrypt = require('bcrypt')
const saltRounds = 10
// console.log(authModel,"model ########");

async function signup(req,res){
    
   console.log("controller");
   console.log(req.body," sign up in controller"); 

   const name= req.body.name;
   const email = req.body.email;
   const password = req.body.password; 
   authModel.signup(name,email,password);
   
}

async function login(req,res){
   console.log(req.body)
   console.log(req.body," login in controller"); 
   const email = req.body.email;
   const password = req.body.password; 
  const loginRes = await authModel.login(email,password);
  console.log(loginRes,"---Logresonse---");

  if(loginRes.length>0){
   let token =jwt.sign({id:loginRes.id,email:loginRes.email},"secrettoken",{expiresIn:600})
   console.log(token,"creating token in login in controller");
   return res.json({ success: true,token }).status(200);
      
  }else{
   res.status(400).send({error:"token not provided"})
  
  }
  
   // if (!req.body.name && !req.body.password) {
   //    return res.status(500).send({
   //      msg: 'Please signUp for login'
   //    });
   // }else{
   //    return res.send({email,password})
   // }
   
   // console.log(req.token)
   // console.log(req.token," login in controller"); 
   // const{token}=req.body
   // jwt.verify(token,"secrettoken",function(err,decoded){
   //    if(err){

   //    }
   // })
   
}
// const createToken =  (req,res)=>{
   // const {email, password} = req.body;
   // const signableToken = email + password;
   // const logVerify= login(email,password)
   

   //   let token = jwt.sign(logVerify,"secrettoken",{expiresIn:600})
   //   console.log(signableToken,"-------signabletoken------");
   //  console.log(token,"jwt sign in validate.controler");
   // return res.json({auth:true,token:token})
   
   
//  }


function verifyToken(req,res,next){
   
   const {email, password} = req.body;
   const signableToken = email + password;
   console.log(signableToken,"--------signable token in rq.body---");

   // const authHeader =req.headers["authorization"];
   // if(authHeader ===undefined){
   //    res.send({error:"token not created"})
   // }
   // let token = authHeader.split(" ")[1]

   jwt.verify(signableToken,"secrettoken",function(err,decoded){
      if(err){
         res.send({error:"authentication failed"})
      
      }else{
         // req.userId = decoded.id
         res.json({token:signableToken})
            console.log(signableToken,",^^^^^^^^^^^^^^^^^^^^^^^");
            console.log(token,"%%%%%%%%%%%%");
         next()
      }
   })
}

module.exports={
   signup,
   login,
   verifyToken
  
};


// async function validateLogin(req,res){
//    if (!req.body.username || req.body.username.length < 3) {
//       return res.status(500).send({
//         msg: 'Please enter a username with min. 3 chars'
//       });
//    }if (!req.body.password || req.body.password.length < 6) {
//       return res.status(400).send({
//         msg: 'Please enter a password with min. 6 chars'
//       });
//     }  if (
//       !req.body.password_repeat ||
//       req.body.password != req.body.password_repeat
//     ) {
//       return res.status(400).send({
//         msg: 'Both passwords must match'
//       });
//     }
// }















// const {check} = require ('express-validator')
 
// exports.signupValidation = [
//     check('name', 'Name is requied').not().isEmpty(),
//     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
//     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
// ]
 
// exports.loginValidation = [
//      check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
//      check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
 
// ]