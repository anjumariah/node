const  express = require("express");
const{about,ourSpec} = require("../controller/label.controller");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()



router.get('/about',verifyToken,about);
router.get('/speciality',verifyToken,ourSpec);
module.exports=router