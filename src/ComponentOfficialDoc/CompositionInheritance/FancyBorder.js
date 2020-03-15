/**
 * 10.11 evening
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * https://codepen.io/gaearon/pen/ozqNOV?editors=0010
 */
import React from 'react'

const FancyBorder = (props) => {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

export default FancyBorder
