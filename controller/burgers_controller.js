const connection = require('../config/connection.js')

const burger = {
  getBurger(cb) {
    connection.query('SELECT * FROM burgers', (err, burgers) => {
      if (err) throw err
      cb(burgers)
    })
  },
  getOneBurger(burger, cb) {
    connection.query('INSERT INTO burgers SET?', burger, (err) => {
      if (err) throw err
      cb()
    })
  },
  updateBurger(update, id, cb) {
    connection.query('UPDATE burgers SET ? WHERE', [update, { id }], err => {
      if (err) throw err
      cb()
    })
  }
}

module.exports = burger