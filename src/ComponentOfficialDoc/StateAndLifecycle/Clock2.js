/**
 * 3.15 evening
 * https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
 * https://codepen.io/gaearon/pen/KgQpJd?editors=0010
 */
import React from 'react'

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock2
