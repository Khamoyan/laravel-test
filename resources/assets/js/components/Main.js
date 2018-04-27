import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch, Route,Link} from 'react-router-dom';
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
                    <HashRouter>
                        <Switch>
                            <Route path='/employees' render={() => <ListEmployees />} /> 
                            <Route path='/add_emplyees' component={AddEmployees}/>
                            <Route path='/companies' render={()=><ListCompanies />}/>
                            <Route path='/add_companies' component={AddCompany}/>
                        </Switch>
                    </HashRouter>
                </div>        
        );
    }
}
export default Main;

if(document.getElementById('root')){
    ReactDOM.render(<Main />,document.getElementById('root'))
}