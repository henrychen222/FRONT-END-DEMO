/**
 * 3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html#preventing-component-from-rendering
 * https://codepen.io/gaearon/pen/Xjoqwm?editors=0010
 */
import React from 'react'
import WarningBanner from "./WarningBanner";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export default Page
