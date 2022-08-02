const  express = require("express");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()
const {card} = require('../controller/cardController')



router.get('/cards',verifyToken,card);
module.exports=router