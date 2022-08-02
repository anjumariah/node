const  express = require("express");
const {adminPanel} = require('../controller/admin')
const router = express.Router()



router.get('/adminpanel',adminPanel);

module.exports=router