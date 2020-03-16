/**
 *  3.15 evening
 *  https://reactjs.org/docs/components-and-props.html#extracting-components
 *  https://codepen.io/pen?&editable=true&editors=0010
 */
import React from 'react'
import formatDate from "./formatDate";

const Comment = (props) => {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
};

export default Comment
