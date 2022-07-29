const  express = require("express");
const { booking} = require("../controller/booking");
// const { uploadFile } = require("../middlewear/upload");
const {verifyToken} = require("../middlewear/verifyToken")
const router = express.Router()

const path = require('path')
// console.log(bookingModel,"BOOKING---CONTROLLER");
const multer = require('multer');
const { request } = require('https');
const fs = require('fs');


const BASE_DIR = path.join(process.cwd());
const UPLOADS_DIR = path.join(BASE_DIR, 'uploads/booking');
const storage = multer.diskStorage({
    destination:function(req,file,callback){
        if(!fs.existsSync(UPLOADS_DIR)){
            fs.mkdirSync(UPLOADS_DIR);
        }
        callback(null,UPLOADS_DIR)
    } ,
    filename:function (req,file,callback){
        
        callback(null,file.fieldname +'_' + Date.now() + path.extname(file.originalname))
    }
}
)

const upload = multer({storage:storage})
const uploadFile = upload.single('file');

router.post('/booking',uploadFile,booking);
module.exports=router