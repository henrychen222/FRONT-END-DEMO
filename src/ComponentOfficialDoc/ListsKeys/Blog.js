/**
 * 10.11 evening
 * https://reactjs.org/docs/lists-and-keys.html
 * https://codepen.io/gaearon/pen/NRZYGN?editors=0010
 */
import React from 'react'

const Blog = (props) => {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

export default Blog
