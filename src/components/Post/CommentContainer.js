import React, { Component } from 'react';
import Comment from './Comment';
import './Comment.scss';

class CommentContainer extends Component {
    render() {
        const comments = this.props.comments ? this.props.comments : [];
        return (
            <div className="comment-title">
                <h1>Comments</h1>
                <div class="comments">
                    <div class="comment-wrap">
                        <div class="photo">
                        <div class="avatar" style={{ backgroundImage: `url(http://www.go-next.co.jp/blog/wp-content/uploads/2014/09/9fc6f57c5d20456539a7b9420b70c3ee-36x36.png)`}}></div>
                        </div>
                        <div class="comment-block">
                            <form action="">
                                <textarea name="" id="" cols="30" rows="3" placeholder="Add comment..."></textarea>
                            </form>
                        </div>
                    </div>
                    {comments.map(item => (
                        <Comment comment={item}></Comment>
                    ))}

                </div>
            </div>
        )
    }
}

export default CommentContainer;