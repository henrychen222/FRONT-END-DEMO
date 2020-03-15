/**
 * 10.11 evening
 * https://reactjs.org/docs/lifting-state-up.html
 * https://codepen.io/gaearon/pen/WZpxpz?editors=0010
 *
 * Writing Conversion Functions
 * Lifting State Up
 */

import React from 'react'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value); //difference
        console.log(this.props)
    }

    render() {
        const temperature = this.props.temperature;  //difference    props
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput3
