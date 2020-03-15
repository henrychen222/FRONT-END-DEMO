/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 * https://codepen.io/gaearon/pen/ZXeOGM?editors=0010
 */
import React from 'react'

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    console.log(props)
    return <li>{props.value}</li>;
}

export default ListItem
