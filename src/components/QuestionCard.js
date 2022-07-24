import React from "react";

function QuestionCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fw-bolder">Category : {props.category}</h5>
          <p className="card-text text-md-start">Question : {props.question}</p>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
