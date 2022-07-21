const cardModel = require('../models/cardModels')


async function card(req,res){
    try{
        const cardControler =await cardModel.card(card);
        // console.log(cardControler,"-----CARD form label model------");

        if(cardControler){
            return res.json({success:true, cardControler:cardControler}).status(200);
        }else{
            res.status(400).send({success:false,error:"token verification failed failed"})
        }
        
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})
    }
}

module.exports = {
    card
}