/**
 *  3.15 evening
 *  https://reactjs.org/docs/components-and-props.html#extracting-components
 *  https://codepen.io/pen?&editable=true&editors=0010
 */
import React from 'react'
import Avatar from "./Avatar";

const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
};

export default UserInfo
