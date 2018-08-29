import React, { Component } from 'react';
import './Contact.scss';


class Contact extends Component {
    render() {
        return (
            <div class="box h-100">
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-4 col-lg-offset-4 col-md-4 col-sm-4 col-xs-12 border-box">
                            <div class="box-part text-center">

                                <img class="profile" src="https://blog.couchbase.com/wp-content/original-assets/2017/january/bluebird-promises-swagger-nodejs/swagger-logo.png?h=350&auto=compress&cs=tinysrgb" alt="" />

                                <div class="title">
                                    <h3>Systems 2018</h3>
                                </div>

                                <div class="text">
                                    <span>FullStack Developer</span>
                                </div>

                                <div class="icons">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-github"></i></a>
                                    <a href="#"><i class="fa fa-tumblr"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;