import React, { Component } from 'react';
import { basename } from 'path';

class Header extends Component {
  render() {

    const title = !this.props.postinfo ? 'New Technology' : this.props.postinfo.title;
    const subTitle = !this.props.postinfo ? 'A Blog to share knowledge' : this.props.postinfo.summary;
    const fontStyle = {
      fontSize: !this.props.postinfo ? '80px' : '50px'
    };

    const tags = this.props.postinfo && this.props.postinfo.tags ? this.props.postinfo.tags : [];

    return (
      <header className="masthead" style={{ backgroundImage: `url(https://www.goodeat.es/web/wp-content/uploads/blog.jpg)`}} >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1 style={fontStyle} >{title}</h1>
                <span className="subheading">{subTitle}</span>
                {this.props.postinfo &&
                  <div >tags : 
                 {tags.map(item => (
                      <span className={`badge badge-${item.color}`}>{item.title}</span>
                    ))} 
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;