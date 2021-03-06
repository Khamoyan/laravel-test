import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addEmployee: {
                first_name: '',
                last_name: '',
                company_id: '',
                email: '',
                phone: '',
            },
            id: '',
            companies: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.handelAddEmployee = this.handelAddEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.addEmployee);
        state[key] = e.target.value;
        this.setState({addEmployee: state});
    }

    handleChange(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.addEmployee.company_id = this.state.id;
        this.handelAddEmployee(this.state.addEmployee)

    }

    handelAddEmployee(employees) {
        axios.post(`/api/employees`,
            employees,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.props.addEmployee(response.data);
            }).catch((err) => {

        })
    }

    componentWillMount() {
        axios.get(`/api/companies`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.setState({companies: Object.values(response.data)});
            }).catch((err) => {
            console.log(err);

        })
    }

    companiesSelect() {
        return (
            <div>
                <label>Company:</label>
                <select className="form-control" onChange={this.handleChange}>
                    <option>Choose a company</option>
                    {this.state.companies.map(function (value, index) {
                        return (
                            <option key ={index} value={value.id}>
                                {value.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h2>Create</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" className="form-control" required placeholder="First Name" name="first_name"
                                   onChange={(e) => this.handleInput('first_name', e)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" required placeholder="Last Name" name="last_name"
                                   onChange={(e) => this.handleInput('last_name', e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required autoFocus placeholder="email@gmail.com" name="email"
                               onChange={(e) => this.handleInput('email', e)}/>
                    </div>

                    <div className="form-group">
                        <label>Phon</label>
                        <input type="text" className="form-control" required placeholder="099******" name="phone"
                               onChange={(e) => this.handleInput('phone', e)}/>
                    </div>

                    {this.companiesSelect()}
                    <button type="submit" className="btn btn-primary"  onSubmit={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

AddEmployee.propTypes = {
    addEmployee: PropTypes.func
  }

export default AddEmployee;
