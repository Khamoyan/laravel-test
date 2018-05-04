import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {HashRouter, Switch,Redirect} from 'react-router-dom';

class LogoutComponent extends Component{
    
    constructor(props){
        super(props);
        this.state={
         status:false
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.logout=this.logout.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        let auth_token=localStorage.getItem('token');
        const token={
            'auth_token':auth_token,
        }
        this.logout(token)

    }
    logout(data){
        axios.post('/api/logout',data).then((response)=>{
            localStorage.clear();
            this.setState({status: true});
            }).catch((err) => {
            })
        }
    
    render(){
        let redirect
        if(this.state.status) {
             redirect=
                <HashRouter> 
                    <Switch>
                        <Redirect to='/'/>;
                    </Switch>
               </HashRouter>
          }
        const divStyle={}
        return(   
            <div className='containe'>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn btn-primary">logout {redirect}</button>
                </form>
            </div>
            
        )
    }
}

export default LogoutComponent;