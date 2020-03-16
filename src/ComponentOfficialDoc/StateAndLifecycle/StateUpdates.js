/**
 * 3.15 evening
 * https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged
 *
 * not run, only code review
 */
import React from 'react'

class Clock3 extends React.Component {
    constructor(props) {
        super(props);

        // state may contain several independent variables
        this.state = {
            posts: [],
            comments: []
        };
    }

    fetchPosts() {
        //do sth
    }

    fetchComments() {
        // do sth
    }

    componentDidMount() {
        // update state variables independently with separate setState() calls
        this.fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        this.fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }
}

export default Clock3
