import React, { Component } from "react";
import axios from "axios";

export default class Tasks extends Component {
  state = {
    tasks: []
  };

  componentDidMount = () => {
    const { id } = this.props;
    axios
      .get(`/api/employees/${id}/tasks`)
      .then(res => this.setState({ tasks: res.data }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        {tasks.map(task => (
          <div><hr />

            <div>{task.name}</div>
            <div>{task.status}</div>
            <div>{task.notes}</div>
            <div>{task.manager}</div>

          </div>
        ))}
      </div>
    );
  }
}
