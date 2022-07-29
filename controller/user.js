
const userModel = require('../models/user')
console.log(userModel,"---------USER In controller---------");


async function userPanel(req,res){
    console.log("controller");
    try{
        const {id} = req.query;        
       const userResponse=await userModel.userPanel(id);
        console.log(userResponse,"iiiiiiiiiiiiiiiiiiiiiiiiiiiisssssdddddddddd");
        if(userResponse ==false){
            return res.json({ success:false , message: 'error'})
        }
        return res.json({ success: true , message: 'user id ',userResponse:userResponse})
    }catch{

        res.send({success:false,error:"no iser"})


    }
}

module.exports = {
    userPanel
}






















// async function adminPanel(req,res){

//     try{
//         const user =await adminModel.adminPanel();
//         const current_id=req.params.id;
//         console.log(current_id,"USER ID CONTROLLER");
//         const current_user=user
      // // const current_id=req.params.id;
        // console.log(current_id,"USER ID CONTROLLER");
        // // const current_user=user
        // const current_user=user[id]
        // console.log(user,id);
        // console.log(current_user,"USER CONTROLLER");
//         console.log(current_user,"USER CONTROLLER");
//         return res.json({ success: true ,admin:current_user}).status(200);
//     }catch{
//         res.status(400).send({success:false,error:"token authentication failed"})

//     }
// }

