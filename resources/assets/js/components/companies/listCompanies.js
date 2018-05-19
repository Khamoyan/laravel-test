import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DeleteCompany from './deleteCompany';
import ShowCompany from './showCompany';
import UpdateCompany from './updateCompany';
import AddCompany from './addCompany';
import Home from '../Home';
import {exportDefaultSpecifier} from 'babel-types';

class ListCompanies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            company:{},
            showId:null,
        };
        this.deleteCompany = this.deleteCompany.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.addCompany = this.addCompany.bind(this);
    }

    componentWillMount() {
        axios.get(`/api/companies/`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
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
        this.setState({companies: this.state.companies});
    }

    editCompany(company, id) {
        this.state.companies.map((value, index) => {
            if (value.id === id) {
                value.name = company.name;
                value.email = company.email;
                value.logo = company.logo;
                value.website = company.website;
            }
        });  
        this.setState({showId: id, company, companies: this.state.companies});
    }

    addCompany(company) {
        let companies = this.state.companies;
        companies.push(company);
        this.setState({showid:company.id, company, companies});
    }

    renderCompanies() {
        let deleteCompany = this.deleteCompany;
        let editCompany = this.editCompany;
        let showId=this.state.showId;
        let company=this.state.company;

        return this.state.companies.map(function (value, index) {
            return (
                <tr key = {index}>
                    <td> {value.name} </td>
                    <td> {value.email} </td>
                    <td> {value.website} </td>
                    <td><img src={`http://laravel.development/storage/logos/${value.logo}`}
                             style={{height: 61 + 'px'}}/></td>
                     <DeleteCompany id={value.id} deleteCompany={deleteCompany}/>
                     <UpdateCompany id={value.id} editCompany={editCompany}/>
                    <td><ShowCompany id={value.id} showId={showId} company={company} /></td>
                </tr>
            )
        })
    }

    render() {
            return (
                <div>
                    <Home/>
                    <AddCompany addCompany={this.addCompany}/>
                    <div className="container">
                        <h2>Companies list</h2>
                        <table className="table">
                            <thead>
                                <tr>
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
            )
        }
}

export default ListCompanies;
