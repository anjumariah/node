const cardModel = require('../models/cardModels')


async function card(req,res){
    try{
        const cardControler =await cardModel.card(card);
        // console.log(cardControler,"-----CARD form label model------");

        if(cardControler){
            return res.json({success:true, cardControler:cardControler}).status(200);
        }if(cardControler===false){
            res.status(400).send({success:false,error:"Not feteched from db"})
        }
        
    }catch{
        res.status(400).send({success:false,error:"token authentication failed"})
    }
}

module.exports = {
    card
}