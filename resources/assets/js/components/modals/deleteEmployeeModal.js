import React,{Component} from 'react';
class DeleteEmployeesModal extends Component{
    render(){
        return(
            <div class="modal fade" id="myModalDelete" role="dialog">
                <div class="modal-dialog"> 
                    <div class="modal-content">
                        <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                        <h4 class="modal-title">Delete Company</h4>
                        <form method="POST" action="" id="deleteForm" enctype="multipart/form-data" >
                            <button type="submit" class="btn btn-primary">Delete</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DeleteEmployeesModal;

    