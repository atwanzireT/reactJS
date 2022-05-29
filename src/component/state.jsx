import React, { Component } from 'react';

class Color extends Component {
    constructor(props){
        super(props)
        this.state ={ favcolor:"Blue"}
    }

    ChangeColor =()=>{
        this.setState({favcolor:"Yellow"});
    }
    render() { 
        return (
            <div>
                <h3>State</h3>
                <h6>It is {this.state.favcolor}</h6>
                <button className="btn btn-outline-dark" onClick={this.ChangeColor}>Change Color</button>
            </div>
        );
    }
}
 
export default Color;