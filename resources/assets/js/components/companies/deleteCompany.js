import React, {Component} from 'react';
import axios from 'axios';
import DeleteCompanyModal from '../modals/deteleCompanyModal';
import PropTypes from 'prop-types';

class DeleteCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            data_target: `delete${this.props.id}`
        }

        this.handelDeleteCompany= this.handelDeleteCompany.bind(this)
        this.deleteModal = this.deleteModal.bind(this)

    }

    handelDeleteCompany(e) {
        e.preventDefault();
        axios.delete(`/api/companies/${this.state.id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.props.deleteCompany(this.state.id);
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
                    <DeleteCompanyModal id={this.state.data_target} delete={this.handelDeleteCompany}/>
                </td>
        )
    }
}

DeleteCompany.propTypes = {
    id: PropTypes.number,
    deleteCompany: PropTypes.func
  }

export default DeleteCompany;
