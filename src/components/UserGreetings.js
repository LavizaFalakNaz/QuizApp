import React from "react";

function UserGreetings(props) {
  const total = props.correct + props.incorrect;
  if (correct >= total % 2) {
    return (
      <div>
        <h2 className="Good">Congratulations!</h2>
        <p> You passed the test with score more than average! </p>
        <h5>Thankyou for participating</h5>
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="Bad">Oops!</h2>
        <p> We're Sorry, you couldnt score the passing grades! </p>
        <h5>Better Luck next time...</h5>
      </div>
    );
  }
}

export default UserGreetings;
