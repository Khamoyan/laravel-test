import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Redirect, HashRouter,Switch} from 'react-router-dom'

class RegisterComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            user_id:'', 
            name:'',   
            email:'',
            password:'',
            confirmPassword:'',
            status:false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputName=this.handleInputName.bind(this);
        this.handleInputEmail=this.handleInputEmail.bind(this);
        this.handleInputPassword=this.handleInputPassword.bind(this);
        this.handleInputConfirmPassword=this.handleInputConfirmPassword.bind(this);
        this.create=this.create.bind(this);
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
            this.create(user)
        } else {
            console.log('error');
        }
        
    }
    create(data){

        axios.post('/api/register',data).then((response)=>{
            this.setState({status: true}); 
            }).catch((err) => {
                
            })
        }
    
    render(){
        let redirect_to_home;
        if(this.state.status) {
         redirect_to_home=
                <HashRouter> 
                        <Switch>
                            <Redirect from='/' to='/home' />;
                        </Switch>
                   </HashRouter>
        }
        const divStyle={}
        return(   
            <div className='containe'>
                <div >
                    <h3>Creat Users</h3>
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
                        <button type="submit" className="btn btn-primary">Creat {redirect_to_home} </button>
                    </form>
                </div>      
            </div>
        )
    }
}

export default RegisterComponent;