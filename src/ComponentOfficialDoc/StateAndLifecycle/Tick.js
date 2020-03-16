/**
 *  3.15 evening
 *  https://reactjs.org/docs/state-and-lifecycle.html
 */
import React from 'react'
import Clock from "./Clock";

const Tick = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <Clock date={new Date()}/>
        </div>
    );
}

export default Tick
