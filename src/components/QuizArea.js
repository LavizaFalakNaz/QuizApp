import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreetings from "./UserGreetings";

function QuizArea(props) {
  if (props.isFinished) {
    return (
      <UserGreetings correct={props.correct} incorrect={props.incorrect} />
    );
  }

  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;

//layout for the quiz question and answers
