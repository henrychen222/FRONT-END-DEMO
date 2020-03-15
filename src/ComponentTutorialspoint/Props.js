/* https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm
   Using Props 5.8 afternoon
*/

import React from 'react';

class Props extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.contentProp}</h2>
            </div>
        );
    }
}

export default Props;
