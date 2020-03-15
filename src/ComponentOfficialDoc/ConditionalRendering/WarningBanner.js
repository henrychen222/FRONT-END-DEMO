/**
 * 3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
 * https://codepen.io/gaearon/pen/Xjoqwm?editors=0010
 */
import React from 'react'

const WarningBanner = (props) => {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
};

export default WarningBanner
