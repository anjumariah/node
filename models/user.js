const makeDbconfig = require('../config/db.config')


async function userPanel(id){
    const db = makeDbconfig.makeDb();
        // console.log("-------model-----------------");
        try{
            // const sql ="SELECT * FROM booking where id=id";            
            const sqlUser= await db.query("SELECT * FROM booking WHERE id = ?",[id])
            console.log(sqlUser,"---user in MODEL------");
            return sqlUser;
        }catch{
            console.log(err);
            return false
        }finally{ 
            await db.close();
          }
}

module.exports = {      
    userPanel
}