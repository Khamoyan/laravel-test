import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ListEmployees from './employees/listEmployees'
import ListCompanies from './companies/listCompanies';
import Home from './Home';
import LoginComponent from './auth/loginComponent'
import GuestRoute from './middleware/GuestRoute'
import PrivateRoute from './middleware/PrivateRoute'
import LogoutComponent from './auth/logoutComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
        }

        this.getToken = this.getToken.bind(this)
    }

    getToken(token){
        this.setState({token: token});
    }
    
    render() {
        let isLogged = !!this.state.token;    
        return (
            <div className="container">
                <div>
                    <HashRouter>
                        <div>
                            <GuestRoute isLogged={isLogged} path='/login' component ={LoginComponent} getToken={this.getToken} />
                            <PrivateRoute isLogged={isLogged} exact path='/home' component = {Home} getToken={this.getToken}/>
                            <PrivateRoute isLogged={isLogged} exact path='/employees' component = {ListEmployees} />
                            <PrivateRoute isLogged={isLogged} exact path='/companies' component = {ListCompanies} />
                        </div>
                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'))
}