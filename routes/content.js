const  express = require("express");
const{about,ourSpec} = require("../controller/label.controller");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,x-client-key, x-client-token, x-client-secret, Authorization");
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

router.get('/about',verifyToken,about);
router.get('/speciality',verifyToken,ourSpec);
module.exports=router