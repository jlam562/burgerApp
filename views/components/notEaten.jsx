const React = require('react')

function notEaten() {
  return (
    <div>
      <h4 id="notEaten">Devour it!</h4>
      <ul className="list-group" id="unEaten">
      </ul>
    </div>
  )
}

module.exports = notEaten