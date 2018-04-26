import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ListEmployees from './listEmployees'

class UpdateEmployee extends Component{
    constructor(props){
        super(props);
        this.state={
                id:''
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handelUpdateEmployees=this.handelUpdateEmployees.bind(this)
        this.handleInput=this.handleInput.bind(this)
        
    }
    handleInput(e){ 
        var state = Object.assign({}, this.state.addEmployees); 
        state[key] = e.target.value;
        this.setState({addEmployees: state });
    } 
    handleSubmit(e){
        console.log(e);
        
        e.preventDefault();
        console.log(this.state.id, 'asdasdas')
        this.handelUpdateEmployees(this.state.id)

    }
    handelUpdateEmployees(id){
        console.log(id,'id');
        axios.put(`/api/employees/${id}`,{}).then((response)=>{
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
export default UpdateEmployee;
