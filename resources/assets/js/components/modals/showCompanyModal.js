import React, {Component} from 'react';

class ShowCompanyModal extends Component {
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
                                <h3>{this.props.list[1]}</h3>
                                <div className="container">
                                    <table className="table">

                                        <tr>
                                            <th>Email:</th>
                                            <td>{this.props.list[2]}</td>
                                        </tr>
                                        <tr>
                                            <th>Web site:</th>
                                            <td>{this.props.list[4]}</td>
                                        </tr>
                                        <tr>
                                            <th>Logo:</th>
                                            <td><img src={`public/logos/${this.props.list[3]})`}/></td>
                                        </tr>
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

export default ShowCompanyModal;
