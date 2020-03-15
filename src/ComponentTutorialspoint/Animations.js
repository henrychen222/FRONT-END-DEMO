import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Animations extends React.Component {
    render() {
        return (
            <div>
                <ReactCSSTransitionGroup transitionName = "example"
                                         transitionAppear = {true} transitionAppearTimeout = {1000}
                                         transitionEnter = {false} transitionLeave = {false}>

                    <h1>My Element...</h1>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default Animations;
