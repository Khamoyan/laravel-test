import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RegisterComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            user_id:'', 
            name:'',   
            email:'',
            password:'',
            confirmPassword:'',
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputName=this.handleInputName.bind(this);
        this.handleInputEmail=this.handleInputEmail.bind(this);
        this.handleInputPassword=this.handleInputPassword.bind(this);
        this.handleInputConfirmPassword=this.handleInputConfirmPassword.bind(this);
        this.login=this.login.bind(this);
    }

    handleInputName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleInputEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    handleInputPassword(e){
        this.setState({
            password: e.target.value
        })
    }
    handleInputConfirmPassword(e){
        this.setState({
            confirmPassword: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.password===this.state.confirmPassword){
            const user={
                name:this.state.name,
                email:this.state.email,
                password:this.state.password
            }
            this.login(user)
        } else {
            console.log('error');
        }
        
    }
    login(data){

        axios.post('/api/register',data).then((response)=>{

            }).catch((err) => {
                
            })
        }
    
    render(){
        
        const divStyle={}
        return(   
            <div className='containe'>
                <div className='row justify-content-center'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="User Name" name="name" onChange={(e)=>this.handleInputName(e)} />
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" name="email" onChange={(e)=>this.handleInputEmail(e)} />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder='Password'  name="password" onChange={(e)=>this.handleInputPassword(e)} />
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder='Confirm Password'  name="confirmPassword" onChange={(e)=>this.handleInputConfirmPassword(e)} />
                        </div>     
                        <button type="submit" className="btn btn-primary">Creat</button>
                    </form>
                </div>      
            </div>
        )
    }
}

export default RegisterComponent;