import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteCompany from './deleteCompany';
import ShowCompany from './showCompany';
import UpdateCompany from './updateCompany';


class ListCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    componentWillMount() {
        axios.get('/api/companies').then((response) => {

            this.setState({companies: Object.values(response.data[0])});

        }).catch((err) => {
            console.log(err);

        })
    }

    renderCompanies() {
        return this.state.companies.map(function (value) {
            return (
                <tr>
                    <td> {value.id} </td>
                    <td> {value.name} </td>
                    <td> {value.email} </td>
                    <td> {value.logo} </td>
                    <td> {value.website} </td>
                    <td><DeleteCompany id={value.id}/></td>
                    <td><UpdateCompany id={value.id}/></td>
                    <td><ShowCompany id={value.id}/></td>
                </tr>
            )
        })
    }

    render() {
        const divStyle = {}
        return (
            <div style={divStyle}>
                <div className="container">
                    <h2>Companies list</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Company Name</th>
                            <th>Email</th>
                            <th>Web Site</th>
                            <th>Logo</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Show</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderCompanies()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCompanies;