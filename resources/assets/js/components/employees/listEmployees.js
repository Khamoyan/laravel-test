import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ListEmployees extends Component{
    constructor(props){
        super(props);
        this.state={
            employees:[],
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick (){
        console.log('this is:', this);
      }

    componentWillMount(){
        axios.get('/api/employees').then((response)=>{
           this.setState({ employees: Object.values(response.data[0])});
           
        }).catch((err) => {
            console.log(err);
            
        })
    }
   

    renderEmployees(){
        return this.state.employees.map(function(value,index){
            return(
                <tr>
                    <td> {value.id} </td>
                    <td> {value.first_name} </td>
                    <td> {value.last_name} </td>
                    <td> {value.email} </td>
                    <td> {value.phone} </td>
                    <td><button type="button" className="btn btn-info btn-lg edit" data-toggle="modal" data-target="#myModal"> Edit</button></td>  
                    <td><button type="button" className="btn btn-info btn-lg delete" data-toggle="modal" data-target="#myModalDelete" onClick={this.handleClick}> Delete</button></td>
                </tr>                
            )
        })
    }      
    render(){
        const divStyle={}
        return(    
          <div style={divStyle}>  
            <div className='row'>
                <h2>Employees list</h2>
                <table className="table">
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
                </div>
          </div>                               
        );
    }
}

export default ListEmployees;