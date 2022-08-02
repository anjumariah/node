const makeDbconfig = require('../config/db.config')

async function card(){
    const db = makeDbconfig.makeDb();
    // console.log("-------model-----------------");
    try{
        const sql ="SELECT * FROM card ";
        const sqlCard= await db.query(sql)
        // console.log(sqlCard,"---CARDS------");
        return sqlCard;
    }catch(err){
        console.log(err);
        return false
    }finally{ 
        await db.close();
      }
}

module.exports = {
    card
}