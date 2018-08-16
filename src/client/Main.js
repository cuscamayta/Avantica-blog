/* eslint-disable */
import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import NavBar from './components/layout/NavBar';
import Searcher from './components/layout/Search';
import Categories from './components/layout/Categories';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Avantica Blog</h1>

                    <NavBar></NavBar>
                    <div className="container">
                        <div class="row">
                            <div class="col-lg-8">
                                <Route exact path="/" component={Home} />
                                <Route path="/stuff" component={Stuff} />
                                <Route path="/contact" component={Contact} />
                            </div>
                            <div class="col-lg-4">
                                <Searcher></Searcher>
                                <Categories></Categories>
                            </div>
                        </div>


                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;