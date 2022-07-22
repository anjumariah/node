const makeDbconfig = require('../config/db.config')

async function about(){
    const db = makeDbconfig.makeDb();
    // console.log("-------model-----------------");
    try{
        const sql ="SELECT * FROM contents WHERE label='about'";
        const sqlAbout= await db.query(sql)
        // console.log(sqlAbout,"---In About------");
        return sqlAbout;
    }catch{
        console.log(err);
        return false
    }finally{ 
        await db.close();
      }
}

async function ourSpec(){
    const db = makeDbconfig.makeDb();
    try{
        const sql ="SELECT * FROM contents WHERE label='ourSpec'";
        const sqlSpec= await db.query(sql)
        // console.log(sqlSpec,"---In About------");
        return sqlSpec;
       
    }catch{
        console.log(err);
        return false
    }finally{ 
        await db.close();
      }
}

module.exports = {
    about,
    ourSpec
}


