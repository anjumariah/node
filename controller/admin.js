const adminModel = require('../models/admin')
console.log(adminModel,"---------ADMIN In controller---------");


async function adminPanel(req,res){
    // console.log(req);
    try{
        const admin =await adminModel.adminPanel();
        // console.log(admin,"-----ADMIN form label model------");
        if(admin ==false){
            return res.json({ success:false , message: 'users details is not feteched from db'})
        }
        return res.json({ success: true ,admin:admin}).status(200);
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})

    }
}

module.exports = {
    adminPanel
}