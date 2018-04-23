import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class AddEmployees extends Component{
    constructor(props){
        super(props);
        this.state={
            addEmployees:{
                firstName:'',
                lastName:'',
                emil:'',
                phone:'',
                company:''
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this)
        
    }

    handleInput(key,e){
        var state = Object.assign({}, this.state.addEmployees); 
        state[key] = e.target.value;
        this.setState({addEmployees: state });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.addEmployees)

    }

    render(){
        const divStyle={}
        return(         
          <div style={divStyle}>  
          
             <h2>Create</h2>
             <form onSubmit={this.handleSubmit} >
                 <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputFname">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" name="first_name" onChange={(e)=>this.handleInput('first_name',e)} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputLname">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" name="last_name" onChange={(e)=>this.handleInput('last_name',e)} />
                    </div>
                 </div>
                    <div class="form-group">
                        <label for="inputEmail">Email</label>
                        <input type="email" class="form-control" placeholder="email@gmail.com" name="email" onChange={(e)=>this.handleInput('email',e)} />
                    </div>

                    <div class="form-group">
                        <label for="inputPhone">Phon</label>
                        <input type="text" class="form-control" placeholder="099******" name="phone" onChange={(e)=>this.handleInput('phone',e)} />
                    </div>

                    <div class="form-group">
                        <label for="inputPhone">Company</label>
                        <input type="text" class="form-control" placeholder="Company" name="company" onChange={(e)=>this.handleInput('company',e)} />
                        <input type="hidden" name="company_id" />
                    </div>  
                    <button type="submit" class="btn btn-primary" onSubmit={this.handleSubmit}>Create</button>             
             </form>

          </div>                               
        )
    }
}

export default AddEmployees;

if(document.getElementById('addEmployees')){
    ReactDOM.render(<AddEmployees />,document.getElementById('addEmployees'))
}