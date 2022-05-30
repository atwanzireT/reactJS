import React, { Component } from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>water is boiling</p>;
    }
    return <p>Water is not boiling</p>;
}

class Calculator extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''}
    }

    handleChange = (e) => {
        this.setState({temperature: e.target.value});
    }
    render() {
        const temperatue = this.state.temperatue;
        return (
            <fieldset>
                <legend>Enter Temperature in celsius: </legend>
                <input />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

export default Calculator;