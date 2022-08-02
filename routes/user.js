const  express = require("express");
const {userPanel} = require('../controller/user')
const router = express.Router()



router.get('/user',userPanel);

module.exports=router