import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <header className="masthead" styles="background-image: url('img/home-bg.jpg')">
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>New Technology</h1>
                    <span className="subheading">A Blog to share knowledge</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        )
    }
}

export default Header;