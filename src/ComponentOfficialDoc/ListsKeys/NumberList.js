/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 * https://codepen.io/gaearon/pen/ZXeOGM?editors=0010
 */
import React from 'react'
import ListItem from "./ListItem";

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.toString()}
                  value={number}/>
    );
    console.log(props)
    return (
        <ul>
            {listItems}
        </ul>
    );
}

export default NumberList
