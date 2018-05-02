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
        this.logout()

    }
    logout(){
        axios.get('/api/logout').then((response)=>{
            sessionStorage.clear();
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
                    <button type="submit" class="btn btn-primary">logout {redirect}</button>
                </form>
                 

            </div>
            
        )
    }
}

export default LogoutComponent;