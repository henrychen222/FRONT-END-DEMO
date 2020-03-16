/**
 * 3.15 evening
 * https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class
 * https://codepen.io/gaearon/pen/amqdNA?editors=0010
 */
import React from 'react'
import FormattedDate from "./FormattedDate";

class Clock3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    // FormattedDate: https://codepen.io/gaearon/pen/zKRqNB?editors=0010
    // https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FormattedDate date={this.state.date}/>
            </div>
        );
    }
}

export default Clock3
