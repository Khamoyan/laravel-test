import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FormData from 'form-data'
import PropTypes from 'prop-types';

class AddCompany extends Component {

    constructor(props) {
        super(props);
        this.state = {
            company: {
                name: '',
                email: '',
                logo: '',
                website: '',
                error:[],
            },
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.handelAddCompany = this.handelAddCompany.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.company);
        state[key] = e.target.value;
        if (key === 'logo') {
            state[key] = e.target.files[0];
        }
        this.setState({company: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = new FormData();
        data.append('name', this.state.company.name);
        data.append('email', this.state.company.email);
        data.append('website', this.state.company.website);
        data.append('logo', this.state.company.logo);
        this.handelAddCompany(data);
    }

    handelAddCompany(data) {
        axios.post(`/api/companies`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.props.addCompany(response.data); 
            }).catch((err) => {
                this.setState({error: err.response.data.errors})
        })
    }

    render() {
        return (
            <div>
                <h2>Create</h2>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" id='form'>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                        {this.state.error ? (<div><p>{this.state.error.name}</p></div> ) : (null) }
                            <label>Company Name</label>
                            <input type="text" className="form-control"  required placeholder="Name" name="name"
                                   onChange={(e) => this.handleInput('name', e)}/>
                        </div>

                        <div className="form-group col-md-6">
                        {this.state.error ? (<div><p>{this.state.error.email}</p></div> ) : (null) }
                            <label>Email</label>
                            <input type="email" className="form-control" required autoFocus placeholder="Email" name="email"
                                   onChange={(e) => this.handleInput('email', e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                    {this.state.error ? (<div><p>{this.state.error.website}</p></div> ) : (null) }
                        <label>Web Site</label>
                        <input type="text" className="form-control" required placeholder="websit.com" name="website"
                               onChange={(e) => this.handleInput('website', e)}/>
                    </div>
                    <div className="form-group">
                        {this.state.error ? (<div><p>{this.state.error.logo}</p></div> ) : (null) }
                        <input type="file" name="logo" required onChange={(e) => this.handleInput('logo', e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

AddCompany.propTypes = {
    addCompany: PropTypes.func
  }

export default AddCompany;
