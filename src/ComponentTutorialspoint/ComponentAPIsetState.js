/* https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm
*  set State   5.8 afternoon
* */

import React from 'react';

class ComponentAPIsetState extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        /* Passing Arguments to Event Handlers
        * https://reactjs.org/docs/handling-events.html
        * */
        this.setStateHandler = this.setStateHandler.bind(this);
        // this.setStateHandler = (e) => this.setStateHandler(e);
    };

    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.data.slice();
        myArray.push(item);
        this.setState({data: myArray})
    };

    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
            </div>
        );
    }
}

export default ComponentAPIsetState;
