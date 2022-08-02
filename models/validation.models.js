const makeDbconfig =require('../config/db.config')
const bcrypt = require('bcrypt')
const saltRounds = 10


async function signup(name,email,password){
  // console.log(name,email,password,"signup in model"); 
  const db = makeDbconfig.makeDb();
try {
 const signQuery =  await db.query( `INSERT INTO signup(name,email,password) VALUES ("${name}","${email}","${password}")`)
//  console.log(signQuery,"&&&&&");
  } catch (err){
    console.log(err);
    return false
  }finally{
    await db.close();
  }  
}

async function login(email,password){       
  // console.log(email,password,"login in model"); 
    const db = makeDbconfig.makeDb();
  
    try{
      const logVerify= await db.query("SELECT * FROM signup WHERE email= ? AND password = ?",[email,password])
      // console.log(logVerify,"*************from db############");
      return logVerify;
    }catch (err){
      console.log(err);

      return false

    }finally{ 
      await db.close();
    } 
      
} 

module.exports={
  signup,
  login  
};


