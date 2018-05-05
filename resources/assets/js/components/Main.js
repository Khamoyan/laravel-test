import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import ListEmployees from './employees/listEmployees'
import AddEmployees from './employees/addEmployees';
import ListCompanies from './companies/listCompanies';
import AddCompany from './companies/addCompany';
import Home from './Home';
import LoginComponent from './auth/loginComponent'
import RegisterComponent from './auth/registerComponent'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div>
                    <HashRouter>
                        <Switch>
                            <div>
                                <Route exact path='/' render={() => <LoginComponent/>}/>
                                <Route exact path='/' render={() => <RegisterComponent/>}/>
                                <Route path='/employees' render={() => <ListEmployees/>}/>
                                <Route path='/companies' render={() => <ListCompanies/>}/>
                                <Route path='/home' render={() => <Home/>}/>
                            </div>
                        </Switch>
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