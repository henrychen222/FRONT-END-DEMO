// https://www.tutorialspoint.com/reactjs/reactjs_forms.htm
// 5.8 evening

import React from 'react';

class FormsSimple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'Initial data...'
        }
        this.updateState = this.updateState.bind(this);
    };

    updateState(e) {
        this.setState({data: e.target.value});  //get the target element value
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.data}
                       onChange={this.updateState}/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default FormsSimple;
