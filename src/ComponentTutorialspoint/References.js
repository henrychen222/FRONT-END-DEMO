// https://www.tutorialspoint.com/reactjs/reactjs_refs.htm
// 5.9 morning on road

import React from 'react';
import ReactDOM from 'react-dom';

class References extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value});
    }

    clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render() {
        return (
            <div>
                <input value={this.state.data} onChange={this.updateState}
                       ref="myInput"></input>
                <button onClick={this.clearInput}>CLEAR</button>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default References;
