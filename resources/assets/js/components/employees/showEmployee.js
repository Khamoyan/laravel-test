import React, {Component} from 'react';
import axios from 'axios';
import ShowEmployeeModal from '../modals/showEmployeeModal';


class ShowEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_target: `show${this.props.id}`,
            employee:{},
            company:[],
        };
        this.show = this.show.bind(this)
    }

    componentWillMount() {
            axios.get(`/api/employees/${this.props.id}`,
                { headers: { Authorization:`Bearer ${localStorage.getItem('token')}`,
                            'Content-Type': 'application/json'}})
                    .then((response) => {  
                        this.setState({employee:response.data});
                        this.setState({company: response.data.compan})
                    }).catch((err) => {
                        console.log(err);
                    })
    }

    show() {                      
        $(`#${this.state.data_target}`).modal();
    }
    render() {
        const divStyle = {}
        return (
            <div style={divStyle}>
                <button type="button" className="btn btn-info btn-lg edit" data-toggle="modal"
                        data-target={this.state.data_target} onClick={this.show}>Show Employee
                </button>
                <ShowEmployeeModal id={this.state.data_target} list={this.state.employee} company={this.state.company} />
            </div>
        )
    }
}

export default ShowEmployee;
