const  express = require("express");
const { booking,uploadFile } = require("../controller/booking");
// const { uploadFile } = require("../middlewear/upload");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()



router.post('/booking',uploadFile,booking);
module.exports=router