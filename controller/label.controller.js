const labelModel = require("../models/label.models")
// console.log(labelModel,"---------label model In controller---------");

async function about(req,res){
    try{
        const aboutCont =await labelModel.about(about);
        // console.log(aboutCont,"-----about content form label model------");

        if(aboutCont.length>0){
            return res.json({success:true, aboutCont:aboutCont}).status(200);
        }else{
            res.status(400).send({success:false,error:"token verification failed failed"})
        }
        
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})
    }
}

async function ourSpec(req,res){
    try{
        const specialityCont =await labelModel.ourSpec(ourSpec);
        // console.log(specialityCont,"-----speciliality content form label model------");
        return res.json({ success: true ,specCont:specialityCont}).status(200);
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})

    }
}
module.exports = {
    about,
    ourSpec
}