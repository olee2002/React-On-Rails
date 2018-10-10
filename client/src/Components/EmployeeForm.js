import React, { Component } from 'react'
import axios from 'axios'

export default class EmployeeForm extends Component {

    constructor(props) {
        super(props)
        const { firstName, lastName, position, email, gender } = this.props.employee
        this.state = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            email: email,
            gender: gender,
            data: []
        }

    }


    handleSubmit = () => {
        const { firstName, lastName, position, email, gender } = this.state
        const payload = {
            first_name: firstName,
            last_name: lastName,
            position,
            email,
            gender
        }
        this.props.isEdited ?
            axios
                .put(`/api/employees/${this.props.employee.id}`, payload)
                .then(res => console.log('updated'))
            : axios
                .post("/api/employees", payload)
                .then(res => console.log('created', res))

    }
    handleChange = name => event => {
        console.log(event.target.value)
        this.setState({ [name]: event.target.value })
    }

    render() {
        const { firstName, lastName, position, email, gender } = this.state
        console.log('test', this.props.employee)
        return (
            <div >
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
                >
                    <div>
                        <label>First_Name </label><input value={firstName} onChange={this.handleChange('firstName')} />
                    </div>
                    <div>
                        <label>Last_Name </label><input value={lastName} onChange={this.handleChange('lastName')} />
                    </div>
                    <div>
                        <label>Position </label><input value={position} onChange={this.handleChange('position')} />
                    </div>
                    <div>
                        <label>Email </label><input value={email} onChange={this.handleChange('email')} />
                    </div>
                    <div>
                        <label>Gender </label><input value={gender} onChange={this.handleChange('gender')} />
                    </div>
                    <button className='btn btn-primary m-2'>Submit</button>
                </form>

            </div>
        )
    }
}
