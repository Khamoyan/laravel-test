import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowCompanyModal from '../modals/showCompanyModal';

class ShowCompany extends Component{
    
    constructor(props){
        super(props);
        this.state={
            data_target:`show${this.props.id}`,
            companies:[]
        }
        this.show=this.show.bind(this)
        
    }
    componentWillMount(){
        axios.get(`/api/companies/${this.props.id}`).then((response)=>{

           this.setState({ companies: Object.values(response.data[0])});           
        }).catch((err) => {
            console.log(err);
        })
    }
    show(){        
        $(`#${this.state.data_target}`).modal();
    }

    
    render(){
        const divStyle={}
        return(         
          <div style={divStyle}>  
            <button  type="button" className="btn btn-info btn-lg edit" data-toggle="modal" data-target={this.state.data_target} onClick={this.show}>Show Employee</button>
            <ShowCompanyModal id={this.state.data_target} list={this.state.companies}/>     
          </div>                               
        )
    }
}

export default ShowCompany;