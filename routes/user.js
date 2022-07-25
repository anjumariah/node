const  express = require("express");
const {adminPanel} = require('../controller/user')
const router = express.Router()



router.get('/user',adminPanel);

module.exports=router