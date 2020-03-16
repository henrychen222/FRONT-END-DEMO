/**
 * 3.15 evening
 * https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
 *
 * not run, only code review
 */
import React from 'react'

class Asynchronous extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            increment: 2
        };
    }

    // not working, only a test
    increase() {
        // Wrong
        this.setState({
            counter: this.state.counter + this.props.increment,
        });

        // Correct, use function rather than object for Asynchronous
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>INCREASE</button>
            </div>
        )
    }
}

export default Asynchronous
