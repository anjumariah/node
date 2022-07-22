const  express = require("express");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()
const {card} = require('../controller/cardController')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,x-client-key, x-client-token, x-client-secret, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

router.get('/cards',verifyToken,card);
module.exports=router