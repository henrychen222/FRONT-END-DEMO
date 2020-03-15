/* https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm
*  Force Update   5.8 afternoon
* */

import React from 'react';

class ComponentAPIForceUpdate extends React.Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        this.forceUpdate(); //https://reactjs.org/docs/react-component.html#forceupdate
    };

    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
                <h4>Random number: {Math.random()}</h4>
            </div>
        );
    }
}

export default ComponentAPIForceUpdate;
