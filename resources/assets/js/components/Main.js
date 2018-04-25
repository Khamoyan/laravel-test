import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddEmployees from './employees/addEmployees';
import axios from 'axios';

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: [],
            currentemploye: null,
        }  
        
        this.handelAddEmployees=this.handelAddEmployees.bind(this)                  
    }
    handelAddEmployees(employees){
    //     fetch('api/employees/creat',{
    //         method:'post',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify(employees)
    //     })
    //     .then(respones=>{
    //         return respones.json
    //     })
    //     .then( data => {
            
    //         this.setState((prevState)=> ({
    //             employees: prevState.employees.concat(data),
    //             currentemploye : data
    //         }))
    //     })
    // axios.post('/api/login', {email: this.state.email, password: this.state.password}).then((response) => {
    //     this.setState({ id:response.data.user.id, name:sessionStorage.getItem('name'), error: ''});
    //     sessionStorage.setItem('user_id', this.state.id);
    //     sessionStorage.setItem('name', response.data.user.name);
    //     this.props.userLogin(this.state.id);
    // }).catch((err) => {
    //     this.setState({ error: 'Incorect Login or Password'});
    // })
    axios.post('api/employees/creat',{})
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

// if (document.getElementById('root')) {
    // ReactDOM.render(<Main />, document.getElementById('root'));
// }
ReactDOM.render(<AddEmployees onAdd={this.handelAddEmployees} />)