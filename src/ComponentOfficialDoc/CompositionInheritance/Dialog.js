/**
 * 10.11 evening
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * https://codepen.io/gaearon/pen/kkEaOZ?editors=0010
 */
import React from 'react'
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}

export default Dialog
