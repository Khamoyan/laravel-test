import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteEmployee from './deleteEmployee';
import UpdateEmployee from './updateEmployee';
import ShowEmployee from './showEmployee';
import AddEmployee from './addEmployee';
import Home from '../Home';
import NotFound from '../Err404';

class ListEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this)
    }
    componentWillMount() {
        axios.get(`/api/employees`, 
                    { headers: { Authorization:`Bearer ${localStorage.getItem('token')}`,    
                                'Content-Type': 'application/json'}})
                .then((response) => {
                        this.setState({employees: response.data})  
                }).catch((err) => {
                    console.log(err);
                })
    }

    deleteEmployee(employee) {
        let employees = this.state.employees;
        employees.map((value, index) => {
            if (value.id === employee) {
                employees.splice(index, 1);
            }
        });
        this.setState({employees});
    }

    editEmployee(employee) {       
        this.state.employees.map((value, index) => {
            if (value.id === employee.id) {
                value.first_name = employee.first_name;
                value.last_name = employee.last_name;
                value.email = employee.email;
                value.phone=employee.phone
            }
        });
        this.setState({employees:this.state.employees});
    }

    addEmployee(employee) {
        this.state.employees.push(employee);
        this.setState({employees: this.state.employees});
        alert('creting');
    }

    renderEmployees() {
        const deleteEmployee = this.deleteEmployee;
        const editEmployee = this.editEmployee;
        const showEmployee=this.state.showEmployee;

        return this.state.employees.map(function (value, index) {
            return (
                <tbody>
                    <tr>
                        <td> {value.first_name}</td>
                        <td> {value.last_name} </td>
                        <td> {value.email} </td>
                        <td> {value.phone} </td>
                        <td><DeleteEmployee id={value.id} deleteEmployee={deleteEmployee}/></td>
                        <td><UpdateEmployee id={value.id} editEmployee={editEmployee}/></td>
                        <td><ShowEmployee id={value.id}/></td>
                    </tr>
                </tbody>
            )
        })
    }

    render() {
        let isLogged = localStorage.getItem('isLogged');
        if (isLogged === 'true') {
            const divStyle = {};
            return (
                <div style={divStyle}>
                    <Home/>
                    <AddEmployee addEmployee={this.addEmployee}/>
                    <div className="container">
                        <h2>Employees list</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Show</th>
                                </tr>
                            </thead>
                            {this.renderEmployees()}
                        </table>
                    </div>
                </div>
            )
        } else {
            return (
                <NotFound />
            )
        }
    }
}

export default ListEmployees;
