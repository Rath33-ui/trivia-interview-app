import React from "react";
import QuestionCard from "./QuestionCard";
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
      alert('Incorrect Answer')
    }
  };

  const updateQuestion = async () => {
    setIsloading(true);
    let url = "https://opentdb.com/api.php?amount=1";
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    setResult(parseData.results);
    setIsloading(false);
    console.log(results);
  };

  const nextQuestion = () => {
    setIsShowPopup(false);
    updateQuestion();
  }

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
            <>
              <div key={e.index}>
                <QuestionCard category={e.category} question={e.question} />
                <hr />
                <UserInput
                  handelSubmit={(...args) => checkSolution(index, ...args)}
                />
              </div>
              <a onClick={nextQuestion}>Skip Question</a>
            </>
          );
        })
      )}
      {isShowPopup ? (
        <div className="popup-container">
          <div className="popup-content">
            this is popup your answer correct_answer
            <button onClick={nextQuestion}>Next question</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default QuestionData;
