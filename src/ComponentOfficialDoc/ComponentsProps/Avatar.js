/**
 *  3.15 evening
 *  https://reactjs.org/docs/components-and-props.html#extracting-components
 *  https://codepen.io/pen?&editable=true&editors=0010
 */
import React from 'react'

const Avatar = (props) => {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
};

export default Avatar
