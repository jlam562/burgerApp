const { createConnection } = require('mysql2')

if (process.env.JAWSDB_URL) {
  createConnection = createConnection(process.env.JAWSDB_URL)
}
else {
  connection = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Suger511!',
    database: 'burgers_db'
  })
}

module.exports = connnection