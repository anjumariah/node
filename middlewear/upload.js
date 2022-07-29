// const path = require('path')
// // console.log(bookingModel,"BOOKING---CONTROLLER");
// const multer = require('multer');
// const { request } = require('https');
// const fs = require('fs');


// const BASE_DIR = path.join(process.cwd());
// const UPLOADS_DIR = path.join(BASE_DIR, 'uploads');
// const storage = multer.diskStorage({
//     destination:function(req,file,callback){
//         if(!fs.existsSync(UPLOADS_DIR)){
//             fs.mkdirSync(UPLOADS_DIR);
//         }
//         callback(null,UPLOADS_DIR)
//     } ,
//     filename:function (req,file,callback){
        
//         callback(null,file.fieldname +'_' + Date.now() + path.extname(file.originalname))
//     }
// }
// )

// const upload = multer({storage:storage})
// const uploadFile = upload.single('image');

// module.exports = {
//     uploadFile
// }