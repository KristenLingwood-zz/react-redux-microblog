import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class PostList extends Component {
  handleDelete = id => {
    this.props.dispatch({
      type: 'DELETE_POST',
      id
    });
  };

  render() {
    //map over the posts prop and make a Post compnent for each item in props
    const posts = this.props.posts.map(p => (
      <Post
        key={p.id}
        id={p.id}
        title={p.title}
        body={p.body}
        deleteHandler={() => this.handleDelete(p.id)}
      />
    ));
    return (
      <div>
        <h1>Post List</h1>
        {posts}
        <hr />
      </div>
    );
  }
}

// passed to connect function
// puts the redux state of posts from store onto PostList component as a prop
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

//connect is immediately invoked
//given the mapStateToProps function
//connects PostList to Redux store
export default connect(mapStateToProps)(PostList);
