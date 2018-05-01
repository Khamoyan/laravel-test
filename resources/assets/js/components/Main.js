import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import ListEmployees from './employees/listEmployees'
import AddEmployees from './employees/addEmployees';
import ListCompanies from './companies/listCompanies';
import AddCompany from './companies/addCompany';


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
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link to='/'>Home </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='employees'>Employees </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to='companies'>Companies </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>

                                <Route path='/employees' render={() => <ListEmployees/>}/>
                                <Route path='/add_emplyees' component={AddEmployees}/>
                                <Route path='/companies' render={() => <ListCompanies/>}/>
                                <Route path='/add_companies' component={AddCompany}/>

                            </div>>

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