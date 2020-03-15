/**
 * 10.11 evening
 * https://reactjs.org/docs/lifting-state-up.html
 * https://codepen.io/gaearon/pen/jGBryx?editors=0010
 * Adding a Second Input
 */
import React from 'react'
import TemperatureInput2 from './TemperatureInput2'

class Calculator2 extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput2 scale="c" />
                <TemperatureInput2 scale="f" />
            </div>
        );
    }
}

export default Calculator2
