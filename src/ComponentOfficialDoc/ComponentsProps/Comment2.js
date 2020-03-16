/**
 *  3.15 evening
 *  https://reactjs.org/docs/components-and-props.html#extracting-components
 *  https://codepen.io/pen?&editable=true&editors=0010
 */
import React from 'react'
import formatDate from "./formatDate";
import UserInfo from "./UserInfo";

const Comment2 = (props) => {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
};

export default Comment2
