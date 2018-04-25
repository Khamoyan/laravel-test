import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ListEmployees extends Component{
    constructor(props){
        super(props);
        this.state={
            employees:[]
            
        }
        this.componentDidMount=this.componentDidMount.bind(this)
        
    }

    componentDidMount(){

        axios.get('/api/employees').then((response)=>{
           this.setState({ employees: Object.values(response.data)[0]});
            
        }).catch((err) => {
            
        })
        }
    
        renderEmployees(){
            return this.state.employees.map(employee=>{
                return(
                    <tr>
                        <td> {employee.id} </td>
                        <td> {employee.first_name} </td>
                        <td > {employee.last_name} </td>
                        <td > {employee.email} </td>
                        <td > {employee.phone} </td>
                        <button type='button'></button>
                        <button type='button'></button>
                    </tr>                
                )
            })
        }      

    render(){
        const divStyle={}
        return(         
          <div style={divStyle}>  
          <div class='row'>
            <h2>Employees list</h2>
            <table class="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                     {this.renderEmployees()}
                </tbody>

            </table>
            {/* {{ $lists->links()}} */}
            
            </div>
          

          </div>                               
        )
    }
}

export default ListEmployees;

if(document.getElementById('listEmployees')){
    ReactDOM.render(<ListEmployees />,document.getElementById('listEmployees'))
}