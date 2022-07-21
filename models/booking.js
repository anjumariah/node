const makeDbconfig =require('../config/db.config')



async function booking(name,date,time,physician,idProof){
  // console.log(name,date,time,physician,idProof,"BOOKING MODEL---"); 
  const db = makeDbconfig.makeDb();
try {
  
 const sql =   `INSERT INTO booking(name,date,time,physician,idProof) VALUES ('${name}','${date}','${time}','${physician}','${idProof}')`
 const sqlBooking= await db.query(sql)
 console.log(sqlBooking,"BOOKING___QUERY");
  } catch (err){
    console.log(err);
    return false
  }finally{
    await db.close();
  }  
}

module.exports={
    booking
}