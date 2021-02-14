import React from "react";

function TotalCorrect(props) {
  return <p className="correct">Correct: {props.correct}</p>;
}

export default TotalCorrect;

//calculates answers
//can be done with a single function too
//done this way to provide help in props and states
