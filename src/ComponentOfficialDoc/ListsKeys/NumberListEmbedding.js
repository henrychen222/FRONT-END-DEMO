/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 * https://codepen.io/gaearon/pen/BLvYrB?editors=0010
 *
 * JSX allows embedding any expression in curly braces, so so we could inline the map() result
 * this file work same as NumberList.js
 */
import React from 'react'
import ListItem from "./ListItem";

const NumberListEmbedding = (props) => {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number}/>
            )}
        </ul>
    );
}

export default NumberListEmbedding
