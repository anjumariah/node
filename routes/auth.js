const  express = require("express");
const {signup,login, verifyToken} = require("../controller/validation.controller");

const router = express.Router()


router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  router.use(express.json());
// router.get('/',(req,res) => {
//     console.log("hi");
//     res.send("anju")
// })
router.post('/signup',signup)

router.post('/login',login)

router.get('/an',(req,res) => {
    console.log("hi");
    res.send("ajay")
})

module.exports = router;