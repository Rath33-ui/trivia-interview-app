import React from "react";
import { useState } from "react";

function UserInput(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    let val = event.target.userinput.value;
    console.log(val);
    props.handelSubmit( val);
  };
  return (
    <div container>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="text" className="col-form-label">
            Answer :
          </label>
        </div>
        <form className="col-auto" onSubmit={submitHandler}>
          <input type="text" className="form-control" name="userinput" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserInput;
