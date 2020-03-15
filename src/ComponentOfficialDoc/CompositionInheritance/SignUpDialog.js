/**
 * 10.11 evening
 * https://reactjs.org/docs/composition-vs-inheritance.html
 * https://codepen.io/gaearon/pen/gwZbYa?editors=0010
 */
import React from 'react'
import Dialog2 from "./Dialog2";

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render() {
        return (
            <Dialog2 title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog2>
        );
    }
}

export default SignUpDialog
