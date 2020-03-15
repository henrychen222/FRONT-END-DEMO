/* https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm
   Default Props 5.8 afternoon
*/

import React from 'react';

class DefaultProps extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerPropDP}</h1>
                <h2>{this.props.contentPropDP}</h2>
            </div>
        );
    }
}

DefaultProps.defaultProps = {
    headerPropDP: "Default Props: Header ...",
    contentPropDP: "Default Props: Content ..."
}
export default DefaultProps;
