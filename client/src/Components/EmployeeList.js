import React, { Component } from "react";
import axios from "axios";

import Tasks from "./Tasks";
import EmployeeForm from "./EmployeeForm";

export default class EmployeeList extends Component {
  state = {
    employees: [],
    clicked: false,
    isNew: false,
    isEdited: false,
    employee: {
      firstName: '',
      lastName: '',
      position: '',
      email: '',
      gender: ''

    }
  };

  componentDidMount = () => {
    axios
      .get("/api/employees")
      .then(res => this.setState({ employees: res.data }));
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleEmployee = () => {
    this.setState({ isNew: !this.state.isNew });
  };
  handleEdit = (obj) => {
    this.setState({
      isNew: !this.state.isNew,
      isEdited: !this.state.isEdited,
      employee: {
        id: obj.id,
        firstName: obj.first_name,
        lastName: obj.last_name,
        position: obj.position,
        email: obj.email,
        gender: obj.gender
      }
    });
  };

  handleDelete = (id) => {
    axios
      .delete(`/api/employees/${id}`)
      .then(res => this.setState({ employees: res.data }))
  }

  render() {
    const { employees, employee, clicked, isNew, isEdited } = this.state;
    return (
      <div
        style={{
          textAlign: "left",
          marginLeft: 450,
          marginRight: 450
        }}
      >
        <div>
          <button className='btn btn-primary mb-3 mt-3' onClick={this.handleEmployee}>Add/Update Employees</button>
          {isNew ? <EmployeeForm employee={employee} isEdited={isEdited} /> : null}
          <hr />
        </div>
        {
          employees.sort((a, b) => a.id > b.id).map(e => (
            <div key={e.id}>
              <div>Name: {e.first_name}{e.last_name}</div>
              <div>Position:{e.position}</div>
              <div>Email:{e.email}</div>
              <div>Gender:{e.gender}</div>
              <button className='btn btn-danger' onClick={() => this.handleDelete(e.id)}>Delete</button>
              <button className='btn btn-primary m-2' onClick={() => this.handleEdit(e)}>Edit</button>
              <button className='btn btn-primary' onClick={this.handleClick}>Show Tasks</button>
              {clicked ? <Tasks id={e.id} /> : null}
              <hr />
            </div>
          ))
        }
      </div >
    );
  }
}
