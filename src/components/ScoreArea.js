import React from "react";
import totalCorrect from "./TotalCorrect";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";

function ScoreArea(props) {
  return (
    <div className="scoreWrapper">
      <h3>Score Board</h3>
      <div class="flow">
        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    </div>
  );
}

export default ScoreArea;
