const  express = require("express");
const {signup,login} = require("../controller/validation.controller");
const {verifyToken} = require("../middlewear/verifyToken")


const router = express.Router()


router.post('/signup',signup);

router.post('/login',login);



router.get('/an',(req,res) => {
    console.log("hi");
    res.send("ajay");
    res.send(req.body)
})

module.exports = router;

