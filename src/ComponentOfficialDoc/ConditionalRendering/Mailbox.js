/**
 *  3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
 * https://codepen.io/gaearon/pen/ozJddz?editors=0010
 */
import React from 'react'

const Mailbox = (props) => {
    const unreadMessages = props.unreadMessages;  // props for parent-child component communication
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
};

export default Mailbox
