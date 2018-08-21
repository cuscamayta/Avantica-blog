import React, { Component } from 'react';
import PostPreview from '../Post/PostPreview';
import Pagination from '../shared/pagination/Pagination';

class PostPreviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            renderedUsers: [],
            page: 1,
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(page) {        
        const renderedUsers = this.props.posts.slice((page - 1) * 2, (page - 1) * 2 + 5);     
        this.setState({ page, renderedUsers });
    }

    componentDidMount() {        
        setTimeout(() => {
            this.setState({ renderedUsers: this.props.posts.slice(0, 5), total: this.props.posts.length });
        },1000)
    }

    render() {
        const { page, total, renderedUsers } = this.state;
        return (
            <div className="col-lg-8">
                {renderedUsers.map(item => (
                    <PostPreview key={item.id + item.userId} post={item}></PostPreview>
                ))}
                <Pagination
                    margin={2}
                    page={page}
                    count={Math.ceil(total / 5)}
                    onPageChange={this.handlePageChange}
                />
            </div>
        )
    }
}

export default PostPreviewContainer;

