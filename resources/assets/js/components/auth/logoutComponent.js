import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class RegisterComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
            user_id:'',
            user:{
                email:'',
                password:''
            }
          
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInput=this.handleInput.bind(this)
        this.login=this.login.bind(this);
    }

    handleInput(key,e){
        var state = Object.assign({}, this.state.user); 
        state[key] = e.target.value;
        this.setState({user: state });
    }

    handleSubmit(e){
        console.log(this.state.user);
        
        e.preventDefault();
        this.login(this.state.user)

    }
    login(data){

        axios.post('/api/login',data).then((response)=>{
            sessionStorage.setItem('id', response.data.user.id);
            sessionStorage.setItem('name', response.data.user.name);
            this.setState({user_id: response.data.user.id});
    
            }).catch((err) => {
                
            })
        }
    
    render(){
        const divStyle={}
        return(   
            <div className='containe'>
                <div className='row justify-content-center'>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" name="email" onChange={(e)=>this.handleInput('email',e)} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control"  name="password" onChange={(e)=>this.handleInput('password',e)} />
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>      

            </div>
            
        )
    }
}

export default RegisterComponent;