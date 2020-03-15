// https://www.tutorialspoint.com/reactjs/reactjs_components.htm
// 5.8 morning

import React from 'react';

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}

export default TableRow;
