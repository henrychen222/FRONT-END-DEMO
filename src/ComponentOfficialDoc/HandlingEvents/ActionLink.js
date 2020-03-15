/**
 *  3.14 evening
 *  https://reactjs.org/docs/handling-events.html
 */
import React from 'react'

const ActionLink = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <a href="#" onClick={handleClick}> Click me
        </a>
    );
}

export default ActionLink
