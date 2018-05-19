import React, {Component} from 'react';
import axios from 'axios';
import ShowEmployeeModal from '../modals/showEmployeeModal';
import PropTypes from 'prop-types';

class ShowEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data_target: `show${this.props.id}`,
            employee: {},
            company: '',
        };
        this.show = this.show.bind(this)
    }

    componentWillMount() {
        axios.get(`/api/employees/${this.props.id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                this.setState({employee: response.data});
                this.setState({company: response.data.company['name']})
            }).catch((err) => {
            console.log(err);
        })
    }

    show() {
        if(this.props.id === this.props.showId){ 
            this.setState({employee: this.props.employee});
        }
        $(`#${this.state.data_target}`).modal();
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-info btn-lg edit" data-toggle="modal"
                        data-target={this.state.data_target} onClick={this.show}>Show Employee
                </button>
                <ShowEmployeeModal id={this.state.data_target} list={this.state.employee} company={this.state.company}/>
            </div>
        )
    }
}

ShowEmployee.propTypes = {
    id: PropTypes.number,
    showId:PropTypes.number,
    employee:PropTypes.object,
  }

export default ShowEmployee;
