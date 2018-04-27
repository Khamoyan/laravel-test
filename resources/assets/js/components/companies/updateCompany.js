import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UpdateCompanyModal from '../modals/updateCompanyModal';

class UpdateCompany extends Component{
    constructor(props){
        super(props);
        this.state={
                company:{
                    name:'',
                    email:'',
                    logo:'',
                    website:''
                    },
                id:this.props.id,
                data_target:`update${this.props.id}`
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handelUpdateCopmany=this.handelUpdateCopmany.bind(this)
        this.handleInput=this.handleInput.bind(this);
        this.update=this.update.bind(this)
        
    }
    handleInput(key,e){
        var state = Object.assign({}, this.state.company); 
        state[key] = e.target.value;
        this.setState({company: state });
    }

    handleSubmit(e){

        e.preventDefault();
        this.handelUpdateCopmany(this.state.id,this.state.company)

    }
    handelUpdateCopmany(id,company){
        axios.put(`/api/employees/${id}`,company).then((response)=>{
            }).catch((err) => {

            })
        }
        update(){
            $(`#${this.state.data_target}`).modal();
        }

    render(){
        const divStyle={}
        return(   
           <div>
             <td><button type="button" className="btn btn-info btn-lg edit" data-toggle="modal" data-target={this.state.data_target}  onClick={this.update}> Edit</button></td> 
             <UpdateCompanyModal id={this.state.data_target} updateCompany={this.handleSubmit} handleInput={this.handleInput}/>
           </div>          
        )
    }
}
export default UpdateCompany;
