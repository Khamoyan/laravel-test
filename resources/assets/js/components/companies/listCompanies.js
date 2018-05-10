import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteCompany from './deleteCompany';
import ShowCompany from './showCompany';
import UpdateCompany from './updateCompany';
import AddCompany from './addCompany';
import Home from '../Home';
import {exportDefaultSpecifier} from 'babel-types';
import NotFound from '../Err404';

class ListCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        };
        this.deleteCompany = this.deleteCompany.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.addCompany = this.addCompany.bind(this);
    }

    componentWillMount() {
        axios.get(`/api/companies/`, 
                        { headers: { Authorization:`Bearer ${localStorage.getItem('token')}`,    
                                    'Content-Type': 'application/json'}})
                    .then((response) => {
                        this.setState({companies: response.data});
                    }).catch((err) => {
                        console.log(err);

                    })
    }

    deleteCompany(company) {
        let companies = this.state.companies
        companies.map((value, index) => {
            if (value.id === company) {
                companies.splice(index, 1);
            }
        });
        this.setState({companies:this.state.companies});
    }

    editCompany(company) {
        this.state.companies.map((value, index) => {
            if (value.id === company.id) {
                value.name = company.name;
                value.email = company.email;
                value.logo = company.logo;
                value.website = company.website;
            }
        });
        this.setState({companies:this.state.companies});
    }

    addCompany(company) {
        this.state.companies.push(company);
        this.setState({companies: this.state.companies});
        alert('creting');
    }

    renderCompanies() {
        let deleteCompany = this.deleteCompany;
        let editCompany = this.editCompany;

        return this.state.companies.map(function (value) {
            return (
                <tr>
                    <td> {value.name} </td>
                    <td> {value.email} </td>
                    <td> {value.website} </td>
                    <td><img src={`http://laravel.development/storage/logos/${value.logo}`} style={{height: 61 + 'px'}}/></td>
                    <td><DeleteCompany id={value.id} deleteCompany={deleteCompany}/></td>
                    <td><UpdateCompany id={value.id} editCompany={editCompany}/></td>
                    <td><ShowCompany id={value.id}/></td>
                </tr>
            )
        })
    }

    render() {
        let isLogged = localStorage.getItem('isLogged');
        if (isLogged === 'true') {
            const divStyle = {}
            return (
                <div style={divStyle}>
                    <Home/>
                    <AddCompany addCompany={this.addCompany}/>
                    <div className="container">
                        <h2>Companies list</h2>
                        <table className="table">
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Web Site</th>
                                <th>Logo</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Show</th>
                            </tr>
                            {this.renderCompanies()}
                        </table>
                    </div>
                </div>
            )
        } else {
            return ( <NotFound />)
        }
    }
}

export default ListCompanies;
