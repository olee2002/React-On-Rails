import React, { Component } from "react";
import "./App.css";

import EmployeeList from "./Components/EmployeeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Employee List</h1>
        <EmployeeList />
      </div>
    );
  }
}

export default App;
