import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch, Route,Link} from 'react-router-dom';
import LoginComponent from './auth/loginComponent';
import RegisterComponent from './auth/registerComponent';

class Index extends Component {
    constructor(props){
        super(props);
        this.state={

        }  
    }
    render() {
        return (
                <div className="container">
                    <HashRouter>
                        <Switch>
                            <div><Route path='/' render={() => <LoginComponent />} /></div>
                            <div><Route path='/' render={() => <RegisterComponent />} /> </div>
                        </Switch>
					</HashRouter>
					
                </div>        
        );
    }
}
export default Index;

if(document.getElementById('root1')){
    ReactDOM.render(<Index />,document.getElementById('root1'))
}