/**
 *  3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html#element-variables
 * https://codepen.io/gaearon/pen/QKzAgB?editors=0010
 */
import React from 'react'

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
};

export default LogoutButton
