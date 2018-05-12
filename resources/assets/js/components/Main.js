import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import ListEmployees from './employees/listEmployees'
import ListCompanies from './companies/listCompanies';
import Home from './Home';
import LoginComponent from './auth/loginComponent'

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
                        <div>
                            <Route exact path='/' component = {LoginComponent}/>
                            <Route exact path='/employees' component = {ListEmployees}/>
                            <Route exact path='/companies' component = {ListCompanies}/>
                            <Route exact path='/home' component = {Home}/>
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