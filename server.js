const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.use(require('./routes'))

app.get('/', (req, res) => {
  res.render('burgers')
})

app.listen(PORT)