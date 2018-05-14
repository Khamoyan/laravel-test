import React, {Component} from 'react';
import axios from 'axios';
import UpdateEmployeeModal from '../modals/updateEmployeeModal';


class UpdateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                company_id: '',
                _method: 'PUT'
            },
            companies: [],
            company_id: '',
            id: this.props.id,
            data_target: `update${this.props.id}`
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelUpdateEmployees = this.handelUpdateEmployees.bind(this)
        this.handleInput = this.handleInput.bind(this);
        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this);

    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.employee);
        state[key] = e.target.value;
        this.setState({employee: state});
    }

    handleChange(event) {
        this.setState({company_id: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.employee.company_id = this.state.company_id;
        this.handelUpdateEmployees(this.state.id, this.state.employee)
    }

    handelUpdateEmployees(id, employees) {
        axios.post(`/api/employees/${id}`,
            employees,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.props.editEmployee(this.state.employee, id);
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

    update() {
        $(`#${this.state.data_target}`).modal();
    }

    render() {
        return (
                 <td>
                    <button type="button" className="btn btn-info btn-lg edit" data-toggle="modal"
                            data-target={this.state.data_target} onClick={this.update}> Edit
                    </button>
              
                     <UpdateEmployeeModal id={this.state.data_target} updateEmployee={this.handleSubmit}
                                     handleInput={this.handleInput} companies={this.state.companies}
                                     handleChange={this.handleChange}/>
               </td>
        )
    }
}

export default UpdateEmployee;
