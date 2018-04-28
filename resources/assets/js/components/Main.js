import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,  BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios';
import ListEmployees from './employees/listEmployees'
import AddEmployees from './employees/addEmployees';
import DeleteEmployee from './employees/deleteEmployees';
import ShowEmployees from './employees/showEmployee';
import ListCompanies from './companies/listCompanies';
import AddCompany from './companies/addCompany';


class Main extends Component {
    constructor(props){
        super(props);
        this.state={

        }  
    }
    render() {
        return (
                <div className="container">
                
                <div>
                {/* <HashRouter> */}
                <Router>
                
                        <Switch>
                           
                        {/* </Switch> */}
                    {/* <Switch> */}
                        <Route path='/employees' render={() => <ListEmployees />} /> 
                        <Route path='/add_emplyees' component={AddEmployees}/>
                        <Route path='/companies' render={()=><ListCompanies />}/>
                        <Route path='/add_companies' component={AddCompany}/>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item active">
                                Home <span class="sr-only">(current)</span>
                            </li>
                            <li class="nav-item">
                                <Link to='#/employees'>Employees </Link>
                            </li>
                            <li class="nav-item">
                               <Link to='#/companies'>Companies </Link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                        
                    </Switch>
                </Router>
                {/* </HashRouter> */}
                </div>
                    
                </div>        
        );
    }
}
export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}