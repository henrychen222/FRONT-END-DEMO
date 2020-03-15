/**
 * 10.11 afternoon
 * https://reactjs.org/docs/lifting-state-up.html
 * https://codepen.io/gaearon/pen/ZXeOBm?editors=0010
 */
import React from 'react'

const BoilingVerdict = (props) => {
    //conditional rendering
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

export default BoilingVerdict
