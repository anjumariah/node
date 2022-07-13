
const util = require( 'util' );
const mysql = require( 'mysql' );

function makeDb( ) { 
    const config = { 
        host: 'localhost', 
        user: 'root', 
        password: '',
        database: 'hospital_management_system'
          }
  const conn = mysql.createConnection( config );
  console.log("database connected");
  return {
    query( sql, args ) {
      return util.promisify( conn.query )
        .call( conn, sql, args );
    },
    close() {
      return util.promisify( conn.end ).call( conn );
    }
  };
}
module.exports={
   makeDb

};