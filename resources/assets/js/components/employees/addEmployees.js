import React, {Component} from 'react';
import axios from 'axios';

class AddEmployees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addEmployees: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                company_id: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.handelAddEmployees = this.handelAddEmployees.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.addEmployees);
        state[key] = e.target.value;
        this.setState({addEmployees: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handelAddEmployees(this.state.addEmployees)

    }

    handelAddEmployees(employees) {

        axios.post('/api/employees', {employees}).then((response) => {

        }).catch((err) => {

        })
    }

    render() {
        const divStyle = {};
        return (
            <div style={divStyle}>

                <h2>Create</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="First Name" name="first_name"
                                   onChange={(e) => this.handleInput('first_name', e)}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Last Name" name="last_name"
                                   onChange={(e) => this.handleInput('last_name', e)}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="email@gmail.com" name="email"
                               onChange={(e) => this.handleInput('email', e)}/>
                    </div>

                    <div className="form-group">
                        <label>Phon</label>
                        <input type="text" className="form-control" placeholder="099******" name="phone"
                               onChange={(e) => this.handleInput('phone', e)}/>
                    </div>

                    <div className="form-group">
                        <label>Company</label>
                        <input type="text" className="form-control" placeholder="Company" name="company_id"
                               onChange={(e) => this.handleInput('company_id', e)}/>
                        <input type="hidden" name="company_id"/>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Create</button>
                </form>
            </div>
        )
    }
}

export default AddEmployees;