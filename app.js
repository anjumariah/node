const express = require('express')
const dotenv= require('dotenv')
const morgan = require('morgan')
dotenv.config({path:'./config/config.env'})
const path = require('path')
const bodyParser= require('body-parser')

const app = express();

app.use(morgan('combined'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,x-client-key, x-client-token, x-client-secret, Authorization");
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use(bodyParser.json());

const signuprouter = require('./routes/auth')
app.use('/auth', signuprouter)

const contentRouter = require('./routes/content')
app.use('/content', contentRouter)

const cardRouter = require('./routes/card')
app.use('/card',cardRouter)

app.use(express.static("uploads/booking"));

const bookRouter = require('./routes/booking')
app.use('/book',bookRouter)

const adminRouter = require('./routes/admin')
app.use('/admin',adminRouter)

const userRouter = require('./routes/user')
app.use('/use',userRouter)
  
  const port = 3005
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






















