import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './employees/addEmployees'

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: [],
        }                    
    }
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home Page</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
