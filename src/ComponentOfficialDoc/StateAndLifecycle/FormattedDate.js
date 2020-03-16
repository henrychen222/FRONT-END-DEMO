/**
 *  3.15 evening
 *  https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
 *  https://codepen.io/gaearon/pen/zKRqNB?editors=0010
 */
import React from 'react'

const FormattedDate = (props) => {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

export default FormattedDate
