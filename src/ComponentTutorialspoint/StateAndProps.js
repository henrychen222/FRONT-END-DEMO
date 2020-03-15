/* https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm
   State And Props 5.8 afternoon
*/

import React from 'react';

class StateAndProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "StateAndProps: Header ...",
            content: "StateAndProps: Content ..."
        }
    }
    render() {
        return (
            <div>
                <HeaderSP headerPropSP = {this.state.header}/>
                <ContentSP contentPropSP = {this.state.content}/>
            </div>
        );
    }
}
class HeaderSP extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerPropSP}</h1>
            </div>
        );
    }
}
class ContentSP extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.contentPropSP}</h2>
            </div>
        );
    }
}
export default StateAndProps;
