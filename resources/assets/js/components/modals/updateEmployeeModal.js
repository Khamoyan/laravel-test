import React, {Component} from 'react';

class UpdateEmployeesModal extends Component {
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
                                <h4 className="modal-title">Edit Companies</h4>


                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name"
                                               name="first_name"
                                               onChange={(e) => this.props.handleInput('first_name', e)}/>
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name"
                                               name="last_name"
                                               onChange={(e) => this.props.handleInput('last_name', e)}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="email@gmail.com"
                                           name="email" onChange={(e) => this.props.handleInput('email', e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Phon</label>
                                    <input type="text" className="form-control" placeholder="099******" name="phone"
                                           onChange={(e) => this.props.handleInput('phone', e)}/>
                                </div>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="form-control" placeholder="Company" name="company"
                                           onChange={(e) => this.props.handleInput('company_id', e)}/>
                                    <input type="hidden" name="company_id"/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.props.updateEmployee}>
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

export default UpdateEmployeesModal;

    