import React, {Component} from 'react';

class DeleteCompanyModal extends Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <h4 className="modal-title">Delete Company</h4>
                            <button type="submit" className="btn btn-primary" onClick={this.props.delete}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteCompanyModal

    