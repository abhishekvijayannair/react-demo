import React from "react";
import Radium from "radium";
import "./Person.css";

const person = (props) => {
  const personDivStyle = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person-div-content" style={personDivStyle}>
      <p className="App-intro" onClick={props.click}>
        Creating {props.name}. His/Her age is {props.age}
      </p>
      <p>{props.children}</p>
      <p>
        <input type="text" value={props.name} onChange={props.changed}></input>
      </p>
    </div>
  );
};

export default Radium(person);
