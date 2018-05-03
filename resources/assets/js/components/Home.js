import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import { HashRouter,Route,Link } from 'react-router-dom';
import ListEmployees from './employees/listEmployees';
import ListCompanies from './companies/listCompanies';
import LogoutComponent from './auth/logoutComponent';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
    
       }
    }

   render() 
        {
            let isLogged=localStorage.getItem('isLogged');
             if(isLogged){ 
                   return(
                         <div>
                              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                  <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                             <Link to='/home'>Home </Link>
                                         </li>
                                        <li className="nav-item">
                                            <Link to='/employees'>Employees </Link>
                                        </li>
                                        <li className="nav-item">
                                             <Link to='/companies'>Companies </Link>
                                         </li>
                                    </ul>
                                </div>
                             </nav>
                            <LogoutComponent />
                         </div>
                    );
                } else{
                    return(
                        <h1>Note Found</h1>
                    );
            }
           } 
    }
