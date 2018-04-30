import React, {Component} from 'react';

import axios from 'axios';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
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
        console.log(this.state.user);

        e.preventDefault();
        this.login(this.state.user)

    }

    login(data) {

        axios.post('/api/login', data).then((response) => {

        }).catch((err) => {

        })
    }

    render() {
        return (
            <div className='containe'>
                <div className='row justify-content-center'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" name="email"
                                   onChange={(e) => this.handleInput('email', e)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" name="password"
                                   onChange={(e) => this.handleInput('password', e)}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default LoginComponent;