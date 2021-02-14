import React from "react";
import "./styles.css";
import Questionnaire from "./components/Questionnaire";

export default function App() {
  return (
    <div className="App">
      <h1>Geography Quiz</h1>
      <p>Let's see how smart are you!</p>
      <Questionnaire />
    </div>
  );
}
