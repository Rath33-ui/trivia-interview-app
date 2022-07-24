import React from "react";
import QuestionCard from "./QuestionCard";
import Popup from "./Popup";
import { useState, useEffect } from "react";
import UserInput from "./UserInput";
import Loader from "./Loader";

function QuestionData() {
  const [results, setResult] = useState([]);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [isloading, setIsloading] = useState(false);

  const checkSolution = (index, userInput) => {
    if (userInput === results[0].correct_answer) {
      setIsShowPopup(true);
    } else {
      alert("Incorrect Answer");
    }
  };

  const updateQuestion = async () => {
    setIsloading(true);
    let url = "https://opentdb.com/api.php?amount=1";
    let data = await fetch(url);
    let parseData = await data.json();
    setResult(parseData.results);
    setIsloading(false);
  };

  const nextQuestion = () => {
    setIsShowPopup(false);
    updateQuestion();
  };

  useEffect(() => {
    updateQuestion();
  }, []);

  return (
    <div className="container">
      {isloading ? (
        <Loader />
      ) : (
        results.map((e, index) => {
          return (
            <div key={e.question}>
              <QuestionCard category={e.category} question={e.question} />
              <hr />
              <UserInput
                handelSubmit={(...args) => checkSolution(index, ...args)}
              />
              <a className="skip" onClick={nextQuestion}>
                Skip Question
              </a>
            </div>
          );
        })
      )}
      {isShowPopup ? (
        <Popup className="correct-popup">
          <b>Congratulations Correct Answer</b>
          <br />
          <button className="btn btn-primary btn-next" onClick={nextQuestion}>
            {" "}
            Next question
          </button>
        </Popup>
      ) : null}
    </div>
  );
}

export default QuestionData;
