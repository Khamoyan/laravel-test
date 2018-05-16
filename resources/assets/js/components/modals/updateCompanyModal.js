import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UpdateCompanyModal extends Component {
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
                                <form encType="multipart/form-data">
                                    <div className="form-row">

                                        <div className="form-group col-md-6">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control" placeholder="Name" name="name"
                                                   onChange={(e) => this.props.handleInput('name', e)}/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Email"
                                                   name="email"
                                                   onChange={(e) => this.props.handleInput('email', e)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Web Site</label>
                                        <input type="text" className="form-control" placeholder="websit.com"
                                               name="website"
                                               onChange={(e) => this.props.handleInput('website', e)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" name="logo"
                                               onChange={(e) => this.props.handleInput('logo', e)}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.props.updateCompany}
                                            data-dismiss="modal">Edit
                                    </button>
                                </form>
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

UpdateCompanyModal.propTypes = {
    id: PropTypes.string,
    handleInput: PropTypes.func,
    updateCompany: PropTypes.func
}

export default UpdateCompanyModal;
