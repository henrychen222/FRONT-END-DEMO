/**
 * 3.14 evening
 * https://reactjs.org/docs/handling-events.html
 */
import React from 'react'

class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick. Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }


    render() {
        return (
            <div>
                {/*both way works*/}
                <button onClick={this.handleClick}> Click me</button>
                <button onClick={() => this.handleClick()}> Click me</button>
            </div>
        );
    }
}

export default LoggingButton

