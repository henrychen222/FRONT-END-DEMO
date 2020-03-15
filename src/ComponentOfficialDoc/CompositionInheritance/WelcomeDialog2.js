/**
 * 10.11 evening
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * https://codepen.io/gaearon/pen/kkEaOZ?editors=0010
 */
import React from 'react'
import Dialog from "./Dialog";

const WelcomeDialog2 = () => {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"/>
    );
}

export default WelcomeDialog2
