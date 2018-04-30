import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteEmployee from './deleteEmployees';
import UpdateEmployee from './updateEmployees';
import ShowEmployees from './showEmployee';

class ListEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        }

    }

    componentWillMount() {
        axios.get('/api/employees').then((response) => {
            this.setState({employees: Object.values(response.data[0])});

        }).catch((err) => {
            console.log(err);

        })
    }

    renderEmployees() {
        return this.state.employees.map(function (value, index) {
            return (
                <tr>
                    <td> {value.id} </td>
                    <td> {value.first_name}</td>
                    <td> {value.last_name} </td>
                    <td> {value.email} </td>
                    <td> {value.phone} </td>
                    <td><DeleteEmployee id={value.id}/></td>
                    <td><UpdateEmployee id={value.id}/></td>
                    <td><ShowEmployees id={value.id}/></td>
                </tr>
            )
        })
    }

    render() {
        const divStyle = {}
        return (
            <div style={divStyle}>
                <div className="container">
                    <h2>Employees list</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Show</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderEmployees()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployees;