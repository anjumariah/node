const makeDbconfig = require('../config/db.config')


async function adminPanel(){
    const db = makeDbconfig.makeDb();
        // console.log("-------model-----------------");
        try{
            const sql ="SELECT * FROM booking";
            const sqlAdmin= await db.query(sql)
            // console.log(sqlAdmin,"---ADMIN in MODEL------");
            return sqlAdmin;
        }catch(err){
            console.log(err);
            return false
        }finally{ 
            await db.close();
          }
}

module.exports = {       
    adminPanel
}