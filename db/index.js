const mysql = require('mysql');
const config = require('../config/db.config');
// 与数据库建立连接
let pool = mysql.createPool(config);

const query = function( sql, values ) {
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) resolve(err)
        else {
            connection.query(sql, values, ( err, rows) => {
                if ( err ) resolve(err )
                else resolve(rows)
                connection.release()
            })
        }
      })
    })
}
module.exports = {
    query
}