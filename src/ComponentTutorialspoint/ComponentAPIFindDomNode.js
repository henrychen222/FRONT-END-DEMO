/* https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm
*  Find Dom Node   5.8 afternoon
* */

import React from 'react';
import ReactDOM from 'react-dom';

class ComponentAPIFindDomNode extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (
            <div>
                <button onClick={this.findDomNodeHandler}>FIND DOME NODE</button>
                <div id="myDiv">NODE</div>
            </div>
        );
    }
}

export default ComponentAPIFindDomNode;
