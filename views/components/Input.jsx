const React = require('react');

function Input() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label htmlFor="exampleFormControlTextarea1">Enter a burger!</label>
        </div>
        <div className="text-center">
          <button type="button" class="btn btn-primary center" id="submit">Submit</button>
        </div>
      </form >
    </div>
  );
}

module.exports = Input