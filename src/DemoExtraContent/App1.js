import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import "./ReactHooksDemo/ReactHookDemo";
import Person from "./Person/Person";
import Welcome from "./Welcome/Welcome";
//import ReactHooksDemo from "./ReactHooksDemo/ReactHookDemo";

class App1 extends Component {
  state = {
    persons: [
      { id: "p1", name: "Abhishek", age: 26 },
      { id: "p2", name: "Abhilash", age: 27 },
      { id: "p3", name: "Manju", age: 34 },
    ],
    someRandomState: "nothing",
    welcomeName: "Robot",
    nicknameStatus: false,
    showPersons: true,
  };

  showNicknamesHandler = (parameterName) => {
    //console.log("Clicked!!");
    //DON'T DO THIS this.state.persons[0].name='Chottu';
    this.toggleNicknameStatusHandler();

    this.setState({
      persons: [
        { id: "p1", name: parameterName, age: 26 },
        { id: "p2", name: "Mottu", age: 27 },
        { id: "p3", name: "Mandu", age: 34 },
      ],
    });
  };

  showRealNamesHandler = () => {
    this.toggleNicknameStatusHandler();

    this.setState({
      persons: [
        { id: "p1", name: "Abhishek", age: 26 },
        { id: "p2", name: "Abhilash", age: 27 },
        { id: "p3", name: "Manju", age: 34 },
      ],
    });
  };

  changeWelcomeNameHandler = (event) => {
    this.setState({
      welcomeName: event.target.value,
    });
  };

  toggleNicknameStatusHandler = () => {
    const doesShow = this.state.nicknameStatus;
    this.setState({
      nicknameStatus: !doesShow,
    });
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
      p.id === id;
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
    let nicknameButton = null;
    let showPerson = null;
    if (this.state.showPersons) {
      showPerson = (
        <div className="App-name-division">
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
    }

    if (this.state.nicknameStatus) {
      nicknameButton = (
        <button
          onClick={() => {
            this.showRealNamesHandler();
          }}
        >
          Show real names
        </button>
      );
    } else {
      nicknameButton = (
        <button
          onClick={() => {
            this.showNicknamesHandler("Chottu!");
          }}
        >
          Show nicknames
        </button>
      );
    }

    return (
      <div className="App">
        <h1 className="App-header">
          Welcome {this.state.welcomeName}! ReactJS Demo
        </h1>
        <div className="App-content">
          <p>Please enter your name :</p>
          <Welcome
            name={this.state.welcomeName}
            changed={this.changeWelcomeNameHandler}
          />
          <br />
          <hr />
          {nicknameButton}&nbsp;
          <button onClick={this.toggleNameHandler}>Toggle Name</button>
          {showPerson}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.showNicknamesHandler.bind(this, "Chottu")}
          >
            Mandan aaa karyam aakanda!!
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>

        {/* <div>
          <ReactHooksDemo />
        </div> */}
      </div>
    );
  }
}

export default App1;
