import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch, Route,Link} from 'react-router-dom';
import LoginComponent from './auth/loginComponent';

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
                            <Route path='/log' render={() => <LoginComponent />} /> 
                            
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