const React = require('react')

function Eaten() {
  return (
    <div>
      <h4 id="isEaten">Burgers Eaten:</h4>
      <ul className="list-group" id="eaten">
      </ul>
    </div>
  )
}

module.exports = Eaten