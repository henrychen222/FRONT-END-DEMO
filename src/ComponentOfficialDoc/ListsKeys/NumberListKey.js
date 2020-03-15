/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 * https://codepen.io/gaearon/pen/jrXYRR?editors=0011
 */
import React from 'react'

const NumberListKey = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberListKey
