import React, { Component } from 'react';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar/NavBar';
import postApi from './PostIDApi';
import CommentContainer from './CommentContainer';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postContent: {
                comments: []
            }
        };
    }
    componentDidMount() {
        postApi.requestPost(this.props.match.params.post).then(data => {
            this.setState({ postContent: data.posts });
        });
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Header postinfo={this.state.postContent}></Header>
                <article>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 mx-auto" dangerouslySetInnerHTML={{ __html: this.state.postContent.content }}></div>
                        </div>
                    </div>
                </article>                
                <CommentContainer comments={this.state.postContent.comments}></CommentContainer>              
            </div>
        )
    }
}

export default Post;