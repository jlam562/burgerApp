const { createConnection } = require('mysql2')
const connection

if (process.env.JAWSDB_URL) {
  createConnection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Suger511!',
    database: 'burgers_db'
  })
}
connection.connect()
module.exports = connection