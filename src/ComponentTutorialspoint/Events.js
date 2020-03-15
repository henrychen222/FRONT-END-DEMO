// https://www.tutorialspoint.com/reactjs/reactjs_events.htm
// 5.9 morning on road

import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        this.setState({data: 'Data updated...'})
    }

    render() {
        return (
            <div>
                <button onClick={this.updateState}>CLICK</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default Events;
