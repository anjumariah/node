const jwt = require("jsonwebtoken");
const authModel = require('../models/validation.models')
// const bcrypt = require('bcrypt')
// const saltRounds = 10
// console.log(authModel,"model SIGNUP ########");

async function signup(req,res){
    try{
    console.log("controller SIGNUP");
    console.log(req.body," sign up "); 
 
    const name= req.body.name;
    const email = req.body.email;
    const password = req.body.password; 
    authModel.signup(name,email,password);
    return res.status(200).json({"sucess": true, message: 'hi'})
   }catch(err){
      return res.json({message:"error"}).status(500);
   }
   
   
}

async function login(req,res){
   try{
      // console.log(req.body)
      // console.log(req.body," login in controller"); 
      const email = req.body.email;
      const password = req.body.password; 
     const loginRes = await authModel.login(email,password);
   //   console.log(loginRes,"---Logresonse---");
   
     if(loginRes.length>0){
      let token = jwt.sign({id:loginRes.id,email:loginRes.email},"secrettoken",{expiresIn:'10h'})
      // console.log(token,"creating token in login in controller");
      return res.json({userEmail:email,usePassword:password, success: true,token }).status(200);
      
     }else{
      res.status(400).send({success:false,error:"token not provided"})
     }
   }catch(err){
      res.status(400).send({success:false,error:"token creation failed"})
     
     }

}

module.exports={
   signup,
   login
  
};







  
   // if (!req.body.name && !req.body.password) {
   //    return res.status(500).send({
   //      msg: 'Please signUp for login'
   //    });
   // }else{
   //    return res.send({email,password})
   // }
   


// async function verifyToken(req,res,next){
   
//    const {email, password} = req.body;
//    const signableToken = email + password;
//    console.log(signableToken,"--------signable token in rq.body---");

//    // const authHeader =req.headers["authorization"];
//    // if(authHeader ===undefined){
//    //    res.send({error:"token not created"})
//    // }
//    // let token = authHeader.split(" ")[1]

//    jwt.verify(signableToken,"secrettoken",function(err,decoded){
//       if(err){
//          res.send({error:"authentication failed"})
      
//       }else{
//          // req.userId = decoded.id
//          res.json({token:signableToken})
//             console.log(signableToken,",^^^^^^^^^^^^^^^^^^^^^^^");
//             console.log(token,"%%%%%%%%%%%%");
//          next()
//       }
//    })
// }




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