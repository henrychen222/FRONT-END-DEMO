/**
 *  3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html
 * https://codepen.io/gaearon/pen/ZpVxNq?editors=0011
 */
import React from 'react'
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

export default Greeting
