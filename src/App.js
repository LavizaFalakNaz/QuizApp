import React from "react";
import "./styles.css";
import Questionnaire from "./components/Questionnaire";

export default function App() {
  return (
    <div className="App">
      <h1>Geography Quiz</h1>
      <p>Test your knowledge and let us know!</p>
      <Questionnaire />
    </div>
  );
}
