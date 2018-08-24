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
            search: ''
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
        }, 1000)
    }

    // filterPosts() {
    //     var updatedList = this.state.initialItems;
    //     updatedList = updatedList.filter(function (item) {
    //         return item.toLowerCase().search(
    //             event.target.value.toLowerCase()) !== -1;
    //     });
    //     this.setState({ items: updatedList });
    // }
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        const { page, total, renderedUsers } = this.state;
        let filterPosts = renderedUsers.filter(
            (post) => {
                return post.title.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );
        return (
            <div className="col-lg-8">
                <form action="" class="search-form">
                    <div class="form-group has-feedback">
                        <label for="search" class="sr-only">Search</label>
                        <input type="text" class="form-control" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="search" />
                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </form>

                {filterPosts.map(item => (
                    <PostPreview key={item.id} post={item}></PostPreview>
                ))}
                <Pagination
                    margin={2}
                    page={page}
                    count={Math.ceil(total / 5)}
                    onPageChange={this.filterPosts}
                />
            </div>
        )
    }
}

export default PostPreviewContainer;

