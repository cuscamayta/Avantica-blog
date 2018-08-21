import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Admin from "./components/admin/Admin";
import Post from "./components/Post/Post";
import Contact from "./components/contact/Contact";
import NavBar from "./components/layout/NavBar";
import Footer from './components/layout/Footer';
import './style/blog.scss';


class Main extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <HashRouter>
                    <div className="content">
                        <Route exact path="#/posts" component={Posts} />
                        <Route path="#/posts/:post" component={Post} />
                        <Route path="#/admin" component={Admin} />
                        <Route path="#/contact" component={Contact} />
                    </div>
                </HashRouter>
                <Footer></Footer>
            </div>
        );
    }
}

export default Main;