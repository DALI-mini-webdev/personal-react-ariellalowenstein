import React, { Component } from 'react';

class TravelPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            updatedDogName:'',
        };
    }
    deletePosting = () => {
        console.log('deleted')
        this.props.delete(this.props.id)
    }
    editPosting = () => {
        console.log ('Editing!');
        this.setState({
            editing: true
        });
    }
    changeNewTitle = (event) => {
        this.setState({
            updatedDogName: event.target.value 
        });
    }
    update = () => {
        this.props.update(this.props.id, this.state.updatedDogName);
        this.setState({
            editing: false,
        });
    }
    render () {
        return (
            <div>
                <p>{this.props.name}{this.props.countryorstate}</p>
                <img src={this.props.cityURL} alt='City'/>
                <button onClick={(e)=>this.props.deletePosting(e, this.props.id)}>Delete</button>
            </div>
        )
    }
}
export default TravelPosting; 