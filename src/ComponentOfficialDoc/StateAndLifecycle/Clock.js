/**
 *  3.15 evening
 *  https://reactjs.org/docs/state-and-lifecycle.html
 */
import React from 'react'

const Clock = (props) => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
};

export default Clock
