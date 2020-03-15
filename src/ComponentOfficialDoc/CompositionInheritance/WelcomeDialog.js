/**
 * 10.11 evening
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * https://codepen.io/gaearon/pen/ozqNOV?editors=0010
 */
import React from 'react'
import FancyBorder from "./FancyBorder";

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

export default WelcomeDialog
