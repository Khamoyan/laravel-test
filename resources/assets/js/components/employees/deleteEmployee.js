import React, {Component} from 'react';
import axios from 'axios';
import DeleteEmployeeModal from '../modals/deleteEmployeeModal';
import PropTypes from 'prop-types';

class DeleteEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            data_target: `delete${this.props.id}`
        };

        this.handelDeleteEmployee = this.handelDeleteEmployee.bind(this)
        this.deleteModal = this.deleteModal.bind(this)

    }

    handelDeleteEmployee(e) {
        e.preventDefault();
        axios.delete(`/api/employees/${this.state.id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.props.deleteEmployee(this.state.id);
            }).catch((err) => {

        })
    }

    deleteModal() {
        $(`#${this.state.data_target}`).modal();
    }

    render() {
        return (
             <td>
                <button type="button" className="btn btn-info btn-lg delete" data-toggle="modal"
                      data-target={this.state.data_target} onClick={this.deleteModal}> Delete
                 </button>
                
                <DeleteEmployeeModal id={this.state.data_target} delete={this.handelDeleteEmployee}/>
            </td>
        )
    }
}

DeleteEmployee.propTypes = {
    id: PropTypes.number,
    deleteEmployee: PropTypes.func
  }

export default DeleteEmployee;
