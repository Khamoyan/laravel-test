import React,{Component} from 'react';
class UpdateCompanyModal extends Component{
    render(){
        return(
            <div>
                <div className="modal fade" id={this.props.id} role="dialog">
                    <div className="modal-dialog">
                    
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h4 classname="modal-title">Edit Companies</h4>
                                <div class="form-row">
               
                                    <div class="form-group col-md-6">
                                        <label for="inputName">Company Name</label>
                                        <input type="text" class="form-control" placeholder="Name" name="name" onChange={(e)=>this.props.handleInput('name',e)} />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" class="form-control" placeholder="Email" name="email" onChange={(e)=>this.props.handleInput('email',e)}/>
                                    </div>
                                 </div>
                                    <div class="form-group">
                                        <label for="inputWebSite">Web Site</label>
                                        <input type="text" class="form-control" placeholder="websit.com" name="website" onChange={(e)=>this.props.handleInput('website',e)} />
                                    </div>
                                    <div class="form-group">
                                        <input type="file" name="logo" value="" onChange={(e)=>this.props.handleInput('logo',e)} />
                                    </div>
                                <button type="submit" class="btn btn-primary" onClick={this.props.updateCompany}>Edit</button>
                            </div>
                            <div className="modal-footer">
                             <button type="button" className="btn btn-default" data-dismiss="modal" >Close</button>
                            </div>
                        </div>
                    </div>
                </div>  
           </div>
        )
    }
}
export default UpdateCompanyModal;

    