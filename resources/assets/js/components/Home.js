import React, {Component} from 'react';
import {Redirect} from 'react-router';
import { Link} from 'react-router-dom';
import LogoutComponent from './auth/logoutComponent';
import {isIfStatement} from 'babel-types';
import NotFound from './Err404';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    HomePage() {
        let isLogged = localStorage.getItem('isLogged');
        let name = localStorage.getItem('name');
        if (isLogged === 'true') {
            return (
                <div>
                    <h3>Hello {name}</h3>
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
                    <LogoutComponent/>
                </div>
            )
        } else {
            return ( <NotFound/>  )
        }
    }

    render() {
        return (
            this.HomePage()
        );
    }
}

export default Home;
