import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, HashRouter} from 'react-router-dom'

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                id:null,
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
            sessionStorage.setItem('id', response.data.user[0].id);
            sessionStorage.setItem('name', response.data.user[0].name);
            this.setState({id: response.data.user[0].id});
  
        }).catch((err) => {

        })
    }

    render() {
        let redirect_to_home
            if(this.state.id) {
                redirect_to_home=<Redirect to='/'/>
            }
        return (
            <div className='containe'>
                <div className='row justify-content-center'>
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
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label"> Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login {redirect_to_home}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent;