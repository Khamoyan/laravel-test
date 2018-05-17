import React, {Component} from 'react';
import axios from 'axios';
import {HashRouter, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                id: null,
                auth_token: '',
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this)
        this.login = this.login.bind(this);
    }

    handleInput(key, e) {
        let state = Object.assign({}, this.state.user);
        state[key] = e.target.value;
        this.setState({user: state});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.login(this.state.user)
    }

    login(data) {
        axios.post('/api/login', data).then((response) => {
            localStorage['token'] = response.data.data['auth_token']
            localStorage['name'] = response.data.data['name']
            this.props.getToken(localStorage.getItem("token"));

        }).catch((err) => {

        })
    }

    render() {   
            return (
                <div className='containe'>
                    <div>
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Email" name="email"
                                       onChange={(e) => this.handleInput('email', e)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder='Password' name="password"
                                       onChange={(e) => this.handleInput('password', e)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login </button>
                        </form>
                    </div>
                </div>
            ) 
    }
}

LoginComponent.propTypes = {
    getToken: PropTypes.func
  }

export default LoginComponent;
