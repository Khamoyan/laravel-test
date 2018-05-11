import React, {Component} from 'react';
import axios from 'axios';
import UpdateCompanyModal from '../modals/updateCompanyModal';

class UpdateCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: {
                name: '',
                email: '',
                logo: '',
                website: ''
            },
            id: this.props.id,
            data_target: `update${this.props.id}`
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelUpdateCompany = this.handelUpdateCompany.bind(this)
        this.handleInput = this.handleInput.bind(this);
        this.update = this.update.bind(this);
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
        let dataUpdate = new FormData();
        dataUpdate.append('name', this.state.company.name);
        dataUpdate.append('email', this.state.company.email);
        dataUpdate.append('website', this.state.company.website);
        dataUpdate.append('logo', this.state.company.logo);
        dataUpdate.append('_method', 'PUT');

        this.handelUpdateCompany(this.state.id, dataUpdate)
    }

    handelUpdateCompany(id, data) {
        axios.post(`/api/companies/${id}`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.setState({company: response.data});
                this.props.editCompany(this.state.company);
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
                <UpdateCompanyModal id={this.state.data_target} updateCompany={this.handleSubmit}
                                    handleInput={this.handleInput}/>
            </div>
        )
    }
}

export default UpdateCompany;
