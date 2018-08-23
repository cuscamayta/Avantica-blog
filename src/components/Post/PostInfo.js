import React, { Component } from 'react';

class PostInfo extends Component {
    render() {
        return (
            <p className="post-meta">Posted by &nbsp;
            <a href="#">{this.props.postinfo.user}</a> &nbsp;
                on {this.props.postinfo.date}</p>
        )
    }
}

export default PostInfo;