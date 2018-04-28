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
        if(key ==='logo'){
            state[key]=e.target.files[0];
        }
        this.setState({company: state});
    }

    handleSubmit(e){
        e.preventDefault();     
        let data = new FormData()
        data.append('name', this.state.company.name);
        data.append('email', this.state.company.email);
        data.append('website',this.state.company.website);
        data.append('logo', this.state.company.logo);

        this.handelUpdateCopmany(this.state.id,data)

    }
    handelUpdateCopmany(id,data){  
        axios.put(`/api/companies/${id}`,data).then((response)=>{
            
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
