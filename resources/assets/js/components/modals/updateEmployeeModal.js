import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UpdateEmployeeModal extends Component {
    companiesSelect() {
        return (
            <div>
                <label>Company:</label>
                <select className="form-control" onChange={this.props.handleChange}>
                    <option>Choose a company</option>
                    {this.props.companies.map(function (value, index) {
                        return (
                            <option key = {index} value={value.id}>
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
                <div className="modal fade" id={this.props.id} role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h4 className="modal-title">Edit Employee</h4>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>First Name</label>
                                        {this.props.error ? (<div><p>{this.state.error.first_name}</p></div> ) : (null) }
                                        <input required type="text" className="form-control" placeholder="First Name"
                                               name="first_name"
                                               onChange={(e) => this.props.handleInput('first_name', e)}/>
                                    </div>

                                    <div className="form-group col-md-6">
                                    {this.props.error ? (<div><p>{this.state.error.last_name}</p></div> ) : (null) }
                                        <label>Last Name</label>
                                        <input required type="text" className="form-control" placeholder="Last Name"
                                               name="last_name"
                                               onChange={(e) => this.props.handleInput('last_name', e)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                {this.props.error ? (<div><p>{this.state.error.email}</p></div> ) : (null) }
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="email@gmail.com"
                                           name="email" required autoFocus onChange={(e) => this.props.handleInput('email', e)}/>
                                </div>
                                <div className="form-group">
                                    {this.props.error ? (<div><p>{this.state.error.phone}</p></div> ) : (null) }
                                    <label>Phon</label>
                                    <input type="text" className="form-control" placeholder="099******" name="phone" required
                                           onChange={(e) => this.props.handleInput('phone', e)}/>
                                </div>
                                {this.companiesSelect()}
                                <button type="submit" className="btn btn-primary" onClick={this.props.updateEmployee}
                                        data-dismiss="modal">
                                    Edit
                                </button>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

UpdateEmployeeModal.propTypes = {
    id: PropTypes.string,
    handleInput: PropTypes.func,
    updateEmployee: PropTypes.func
}

export default UpdateEmployeeModal;
