
const adminModel = require('../models/admin')
console.log(adminModel,"---------USER In controller---------");


async function adminPanel(req,res){
    // console.log(req);
    try{
        const user =await adminModel.adminPanel();
        const {id} = req.query;
        console.log(req.params)
        // console.log(user,"-----USER form label model------");
        // const { id} = req.query;
        // // const current_id=req.params.id;
        // console.log(current_id,"USER ID CONTROLLER");
        // // const current_user=user
        // const current_user=user[id]
        // console.log(user,id);
        // console.log(current_user,"USER CONTROLLER");
        // return res.json({ success: true ,admin:current_user,id:id}).status(200);
        return res.json({ success: true, message: 'hi'})
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})

    }
}

module.exports = {
    adminPanel
}














// async function adminPanel(req,res){

//     try{
//         const user =await adminModel.adminPanel();
//         const current_id=req.params.id;
//         console.log(current_id,"USER ID CONTROLLER");
//         const current_user=user
     
//         console.log(current_user,"USER CONTROLLER");
//         return res.json({ success: true ,admin:current_user}).status(200);
//     }catch{
//         res.status(400).send({success:false,error:"token authentication failed"})

//     }
// }

