const express = require('express')
const dotenv= require('dotenv')
dotenv.config({path:'./config/config.env'})
const path = require('path')
const bodyParser= require('body-parser')

const app = express()

const signuprouter = require('./routes/auth')
app.use('/auth', signuprouter)


  app.use(express.json());
  app.use(bodyParser.json());
  
  const port = 3000
  app.listen(
      port,
      console.log('server running')
      )
  




// app.get('/',(req,res) => {
//     console.log("hi");
//     res.send("anju")
// })
// app.get('/an',(req,res) => {
//     console.log("hi");
//     res.send("ajay")
// })

// app.post('/signup',(req,res)=>{
//     console.log(req.body)
//     console.log(req.body.name);
//     console.log(req.body.email);
//     console.log(req.body.password);
//    res.send("success")
    


// console.log(process.env)






















