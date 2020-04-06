const React = require('react')
const Html = require('./layouts/default.jsx')
const Jumbotron = require('./components/Jumbotron.jsx')
const NotEaten = require('./components/notEaten.jsx')
const Eaten = require('./components/Eaten.jsx')
const Input = require('./components/Input.jsx')

const Burgers = () => {
  return (
    <Html>
      <Jumbotron />
      <NotEaten />
      <Eaten />
      <Input />
    </Html>
  )
}

module.exports = Burgers