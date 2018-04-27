import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddCompany extends Component{
    
    constructor(props){
        super(props);
        this.state={
            company:{
                name:'',
                email:'',
                logo:'',
                website:''
                },
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this)
        this.handelAddCompany=this.handelAddCompany.bind(this);
    }

    handleInput(key,e){
        var state = Object.assign({}, this.state.company); 
        state[key] = e.target.value;
        this.setState({company: state });
    }

    handleSubmit(e){
        e.preventDefault();
        this.handelAddCompany(this.state.company)
        console.log(this.state.company)

    }
    handelAddCompany(company){

        axios.post('/api/companies',{company}).then((response)=>{
    
            }).catch((err) => {
                
            })
        }
    
    render(){
        const divStyle={}
        return(         
          <div style={divStyle}>  
          
             <h2>Create</h2>
             <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
             <div class="form-row">
               
               <div class="form-group col-md-6">
                   <label for="inputName">Company Name</label>
                   <input type="text" class="form-control" placeholder="Name" name="name" onChange={(e)=>this.handleInput('name',e)} />
               </div>

               <div class="form-group col-md-6">
                   <label for="inputEmail">Email</label>
                   <input type="email" class="form-control" placeholder="Email" name="email" onChange={(e)=>this.handleInput('email',e)}/>
               </div>
            </div>
               <div class="form-group">
                   <label for="inputWebSite">Web Site</label>
                   <input type="text" class="form-control" placeholder="websit.com" name="website" onChange={(e)=>this.handleInput('website',e)} />
               </div>
               <div class="form-group">
                   <input type="file" name="logo" onChange={(e)=>this.handleInput('logo',e)} />
               </div>
           <button type="submit" class="btn btn-primary">Create</button>
             </form>
          </div>                               
        )
    }
}

export default AddCompany;