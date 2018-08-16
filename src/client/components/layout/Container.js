/* eslint-disable */
import React, { Component } from 'react';
import Searcher from './Search';
import Post from '../post_card/Post';
import Searcher from '../layout/Searcher';
import Categories from '../layout/Categories';

class Container extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-lg-8">
                    <Post></Post>
                </div>
                <div class="col-lg-4">
                    <Searcher></Searcher>
                    <Categories></Categories>
                </div>
            </div>
        )
    }
}