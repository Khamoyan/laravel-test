import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {HashRouter, Switch, Redirect} from 'react-router-dom';

class LogoutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.logout()
    }

    logout(data) {
        axios.get('/api/logout',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                localStorage.clear();
                this.setState({status: true});
            }).catch((err) => {
        })
    }

    render() {
        let redirect;
        if (this.state.status) {
            redirect =
                <HashRouter>
                    <Switch>
                        <Redirect to='/'/>;
                    </Switch>
                </HashRouter>
        }

        return (
            <div className='containe'>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn btn-primary">logout {redirect}</button>
                </form>
            </div>
        )
    }
}

export default LogoutComponent;
