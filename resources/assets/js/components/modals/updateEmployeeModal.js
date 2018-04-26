import React,{Component} from 'react';
class UpdateEmployeesModal extends Component{
    render(){
        return(
            <div>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <h4 class="modal-title">Edit Companies</h4>
                                <form method="POST" action="" enctype="multipart/form-data" id="editForm">
                            
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputFname">First Name</label>
                                            <input type="text" class="form-control" placeholder="First Name" name="first_name" />
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="inputLname">Last Name</label>
                                            <input type="text" class="form-control" placeholder="Last Name" name="last_name" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputEmail">Email</label>
                                        <input type="email" class="form-control" placeholder="email@gmail.com" name="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPhone">Phon</label>
                                        <input type="text" class="form-control" placeholder="099******" name="phone" />
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPhone">Company</label>
                                        <input type="text" class="form-control" placeholder="Company" name="company" />
                                        <input type="hidden" name="company_id" />
                                    </div>    
                                    <button type="submit" class="btn btn-primary">Edit</button>
                                </form>
                            </div>
                            <div class="modal-footer">
                             <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>  
           </div>
        )
    }
}
export default UpdateEmployeesModal;

    