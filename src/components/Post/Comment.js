import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
    render() {
        return (
            <div class="comment-wrap">
                <div class="photo">
                    <div class="avatar" style={{ backgroundImage: `url(${this.props.comment.avatar})`}}></div>
                    <div className="user-comment">{this.props.comment.user}</div>
                </div>
                <div class="comment-block">
                    <p class="comment-text">{this.props.comment.comment}</p>
                    <div class="bottom-comment">
                        <div class="comment-date">{this.props.comment.date}</div>
                        <ul class="comment-actions">
                            <li class="complain">Complain</li>
                            <li class="reply">Reply</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Comment;