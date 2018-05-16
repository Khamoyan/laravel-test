import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShowEmployeeModal extends Component {
    render() {     
        return (
            <div className="modal fade" id={this.props.id} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Show Employee</h4>
                            <div className="container">
                                <h3>{this.props.list['first_name']}</h3>
                                <div className="container">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Company Name:</th>
                                                <td>{this.props.company}</td>
                                            </tr>
                                            <tr>
                                                <th>Last Name:</th>
                                                <td>{this.props.list['last_name']}</td>
                                            </tr>
                                            <tr>
                                                <th>Email:</th>
                                                <td>{this.props.list['email']}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone:</th>
                                                <td>{this.props.list['phone']}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ShowEmployeeModal.propTypes = {
    id: PropTypes.string,
    company: PropTypes.string,
    list: PropTypes.object
}

export default ShowEmployeeModal;
