import React, { useState } from "react";
import "../App.css";
import Person from "../Person/Person";

//Modifying the App.js Class approach to React Hooks Approach

const reactHooksDemo = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Abhishek", age: 26 },
      { name: "Abhilash", age: 27 },
      { name: "Manju", age: 34 },
    ],
  });

  const [someRandomState, setSomeRandomState] = useState({
    someRandomState: "Nothing",
  });

  const showNicknamesHandler = () => {
    console.log("hook handler clicked!");
    setPersonState({
      persons: [
        { name: "Chottu", age: 26 },
        { name: "Mottu", age: 27 },
        { name: "Mandu", age: 34 },
      ],
    });
  };

  return (
    <div className="App">
      <h1 className="App-header">ReactJS Demo</h1>
      <div className="App-content">
        <button onClick={showNicknamesHandler}>Show nicknames</button>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
        >
          Mandan aaa karyam aakanda!!
        </Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div>
    </div>
  );
};

export default reactHooksDemo;
