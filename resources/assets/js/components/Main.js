import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch, Route,Link} from 'react-router-dom';
import axios from 'axios';
import ListEmployees from './employees/listEmployees'
import AddEmployees from './employees/addEmployees';

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