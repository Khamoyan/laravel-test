import React, {Component} from 'react';
import axios from 'axios';
import UpdateEmployeesModal from '../modals/updateEmployeeModal';


class UpdateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                company:'',
                company_id: ''
            },
            id: this.props.id,
            data_target: `update${this.props.id}`
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelUpdateEmployees = this.handelUpdateEmployees.bind(this)
        this.handleInput = this.handleInput.bind(this);
        this.update = this.update.bind(this)

    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.employee);
        state[key] = e.target.value;
        this.setState({employee: state});
    }

    handleSubmit(e) {

        e.preventDefault();
        this.handelUpdateEmployees(this.state.id, this.state.employee)

    }

    handelUpdateEmployees(id, employees) {
        axios.put(`/api/employees/${id}`, employees).then((response) => {
            this.setState({employee:response.data[0]});
            this.props.editEmployee(this.state.employee);

        }).catch((err) => {

        })
    }

    update() {
        $(`#${this.state.data_target}`).modal();
    }

    render() {
        return (
            <div>
                <td>
                    <button type="button" className="btn btn-info btn-lg edit" data-toggle="modal"
                            data-target={this.state.data_target} onClick={this.update}> Edit
                    </button>
                </td>
                <UpdateEmployeesModal id={this.state.data_target} updateEmployee={this.handleSubmit}
                                      handleInput={this.handleInput}/>
            </div>
        )
    }
}

export default UpdateEmployee;
