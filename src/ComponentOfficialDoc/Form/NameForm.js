/**
 * 10.11 afternoon
 * https://reactjs.org/docs/forms.html
 * https://codepen.io/gaearon/pen/VmmPgp?editors=0010
 */
import React from 'react'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        //data bindings
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});  //default is lower case
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm
