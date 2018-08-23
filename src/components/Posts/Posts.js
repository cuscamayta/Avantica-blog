import React, { Component } from "react";
import NavBar from '../layout/NavBar';
import Header from '../layout/Header';
import postApi from "./PostApi";
import PostPreviewContainer from "./PostPreviewContainer";
import Categories from "../layout/Categories/Categories";
import Searcher from "../layout/Search";
import Widget from "../layout/Widget";

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postContent: {
                posts: []
            }
        };
    }
    componentDidMount() {
        postApi.requestPost().then(data => {
            this.setState({ postContent: data });
        });
    }
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <PostPreviewContainer posts={this.state.postContent.posts}></PostPreviewContainer>
                        <div className="col-lg-4">
                            <Searcher></Searcher>
                            <Categories></Categories>
                            <Widget></Widget>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;