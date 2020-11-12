import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "p1", name: "Abhishek", age: 26 },
      { id: "p2", name: "Abhilash", age: 27 },
      { id: "p3", name: "Manju", age: 34 },
    ],
    someRandomState: "nothing",
    nicknameStatus: false,
    showPersons: true,
  };

  deleteNameHandler = (index) => {
    //const personData = this.state.persons.slice();
    
    const personData = [...this.state.persons];
    personData.splice(index, 1);
    this.setState({
      persons: personData,
    });
  };

  toggleNameHandler = () => {
    if (this.state.showPersons) {
      this.setState({
        showPersons: false,
      });
    } else {
      this.setState({
        showPersons: true,
      });
    }
  };

  editSingleValueinArrayHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    //alternate
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    //To avoid mutability in javascript--- Reference to object issue
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let showPerson = null;
    const AppNameDivisionStyle = {
      marginTop: "10px",
    };

    let showPersonButtonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "grey",
      },
    };

    const alertClasses = [];
    if (this.state.persons.length <= 2) {
      alertClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      alertClasses.push("bold");
    }

    if (this.state.showPersons) {
      showPerson = (
        <div className="App-name-division" style={AppNameDivisionStyle}>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deleteNameHandler(index)}
                key={person.id}
                changed={(event) =>
                  this.editSingleValueinArrayHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
    } else {
      showPersonButtonStyle.backgroundColor = "red";
      showPersonButtonStyle[":hover"] = {
        backgroundColor: "salmon",
        color: "grey",
      };
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1 className="App-header">Welcome! ReactJS Demo</h1>
          <p className={alertClasses.join(" ")}>This is really working!</p>
          <div className="App-content">
            <button
              style={showPersonButtonStyle}
              onClick={this.toggleNameHandler}
            >
              Toggle Name
            </button>
            {showPerson}
          </div>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
