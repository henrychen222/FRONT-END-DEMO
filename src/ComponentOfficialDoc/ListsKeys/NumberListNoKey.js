/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 */
import React from 'react'

const NumberListNoKey = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default NumberListNoKey
