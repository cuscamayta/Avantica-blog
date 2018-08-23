import React, { Component } from 'react';
import PostInfo from './PostInfo';

class PostPreview extends Component {
    render() {
        return (
            
            <div className="post-preview" >
                <a href={`#/posts/${this.props.post.id}`}>
                    <h2 className="post-title">
                        {this.props.post.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {this.props.post.summary}
                    </h3>
                </a>
              <PostInfo postinfo={this.props.post}></PostInfo>
            </div>
        )
    }
}

export default PostPreview;