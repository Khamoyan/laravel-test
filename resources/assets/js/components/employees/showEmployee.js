import React, {Component} from 'react';
import axios from 'axios';
import ShowEmployeeModal from '../modals/showEmployeeModal';


class ShowEmployees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_target: `show${this.props.id}`,
            company: '',
            employee: []
        };
        this.show = this.show.bind(this)
    }

    componentWillMount() {
        axios.get(`/api/employees/${this.props.id}/?token=${localStorage.getItem('token')}`,
                { headers: { 'Authorization': localStorage.getItem('token') }})
            .then((response) => {
                this.setState({company: response.data[0]})
                this.setState({employee: Object.values(response.data[1])});
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
                <ShowEmployeeModal id={this.state.data_target} list={this.state.employee} company={this.state.company}/>
            </div>
        )
    }
}

export default ShowEmployees;
