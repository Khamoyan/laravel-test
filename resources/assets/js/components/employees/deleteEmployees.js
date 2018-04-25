import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class DeleteEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
                id:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handelDeleteEmployees=this.handelDeleteEmployees.bind(this)
        this.handleInput=this.handleInput.bind(this)
        
    }
    handleInput(e){ 
        console.log('asdadsd', e);
        
        this.setState({id: e.target.value });
    } 
    handleSubmit(e){
        console.log(e);
        
        e.preventDefault();
        console.log(this.state.id, 'asdasdas')
        this.handelDeleteEmployees(this.state.id)

    }
    handelDeleteEmployees(id){
        console.log(id,'id');
        axios.delete(`/api/employees/${id}`,{}).then((response)=>{
            // var r=this.props.addPost(response.data.employees);
            
        }).catch((err) => {
            
        })
        }
        

    render(){
        const divStyle={}
        return(   
            <div>
                  <h4 class="modal-title">Delete Companies</h4>
                  <form  id="deleteForm" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                        <input type="hidden"  value='' id='delete' onChange={this.handleInput}/>
                   
                    <button type="submit" class="btn btn-primary">Delete</button>
                  </form>
            </div>                   
        )
    }
}

export default DeleteEmployee;

if(document.getElementById('deleteEmployee')){
    ReactDOM.render(<DeleteEmployee />,document.getElementById('deleteEmployee'))
}
