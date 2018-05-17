import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {HashRouter, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

class LogoutComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get('/api/logout',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                localStorage.clear();
                this.props.getToken(localStorage.getItem("token"));
            }).catch((err) => {
        })
    }

    render() {
        return (
            <div className='containe'>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" className="btn btn-primary">logout</button>
                </form>
            </div>
        )
    }
}

LogoutComponent.propTypes = {
    getToken: PropTypes.func
  }

export default LogoutComponent;
