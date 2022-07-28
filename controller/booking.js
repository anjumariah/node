
const bookingModel = require('../models/booking')
// console.log(bookingModel,"BOOKING---CONTROLLER");


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


async function booking(req,res){
    //  console.log("request ", req.body);
    try{
        // console.log("CONTROLLER-BOOKING");
        console.log(req.file);
        // console.log(req.body);
        // console.log(req.url,"YRLLLLLSurl");
        // console.log((req.file,"FILE UPLOADED-------"));
        const name = req.body.name 
        const date = req.body.date
        const time = req.body.time
        const physician = req.body.physician
        // const idProof = req.body.idProof
        const idProof = req.file.path
        path = path.replace("/", "//")
        bookingModel.booking(name,date,time,physician,idProof)
        
 
        // console.log(bookingModel.booking,"-------------Booking-DETAILS -COntroler");
        return res.status(200).send({sucess:true,message:"Booking Confirmed"})
    }catch(err){
        console.log(err);
        res.status(400).send({success:false,error:"Booking Failed"})
    }
}

module.exports = {
    booking,
    uploadFile
    
}

