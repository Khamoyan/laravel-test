import React, {Component} from 'react';
import axios from 'axios';
import DeleteCompanyModal from '../modals/deteleCompanyModal';


class DeleteCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            data_target: `delete${this.props.id}`
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelDeleteEmployees = this.handelDeleteEmployees.bind(this)
        this.deleteModal = this.deleteModal.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.handelDeleteEmployees(this.state.id)

    }

    handelDeleteEmployees(id) {
        axios.delete(`/api/companies/${id}`).then((response) => {
            this.props.deleteCompany(response.data.id);
        }).catch((err) => {

        })
    }

    deleteModal() {
        $(`#${this.state.data_target}`).modal();
    }

    render() {
        return (
            <div>
                <td>
                    <button type="button" className="btn btn-info btn-lg delete" data-toggle="modal"
                            data-target={this.state.data_target} onClick={this.deleteModal}> Delete
                    </button>
                </td>
                <DeleteCompanyModal id={this.state.data_target} delete={this.handleSubmit}/>
            </div>
        )
    }
}

export default DeleteCompany;
