/**
 * 3.14 evening
 * https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator
 */
import React from 'react'
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class LoginControl2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                {isLoggedIn
                    ? <LogoutButton onClick={this.handleLogoutClick}/>
                    : <LoginButton onClick={this.handleLoginClick}/>
                }
            </div>
        );
    }
}

export default LoginControl2
