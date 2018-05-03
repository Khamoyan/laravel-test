import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteEmployee from './deleteEmployees';
import UpdateEmployee from './updateEmployees';
import ShowEmployees from './showEmployee';
import AddEmployees from './addEmployees';
import Home from '../Home';

class ListEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            activePage: null
        };

        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this)
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
            }
        });
        this.setState({employee});
        this.props.editEmployee(employee)
    }

    addEmployee(employee) {
        this.state.employees.push(employee);
        this.setState({employees: this.state.employees});
        alert('creting');
    }

    componentWillMount() {     
        axios.get('/api/employees').then((response) => {
            console.log(response.data);
            
            this.setState({employees: Object.values(response.data[0].data)})

        }).catch((err) => {
            console.log(err);

        })
    }

    renderEmployees() {
        const deleteEmployee = this.deleteEmployee;
        const editEmployee = this.editEmployee;

        return this.state.employees.map(function (value, index) {
            return (             
                <tr>
                    <td> {value.first_name}</td>
                    <td> {value.last_name} </td>
                    <td> {value.email} </td>
                    <td> {value.phone} </td>
                    <td><DeleteEmployee id={value.id} deleteEmployee={deleteEmployee}/></td>
                    <td><UpdateEmployee id={value.id} editEmployee={editEmployee}/></td>
                    <td><ShowEmployees id={value.id}/></td>
                </tr>
            )
        })
    }

    render() {
        let isLogged=localStorage.getItem('isLogged');
        if(isLogged){
                const divStyle = {};
                return (
                    <div style={divStyle}>
                        <Home/>
                        <AddEmployees addEmployee={this.addEmployee}/>
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
                                <tbody>
                                    {this.renderEmployees()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
            } else{
                return(
                    <h1>Note Found</h1>
                )
                
            }
          } 
    }

export default ListEmployees;