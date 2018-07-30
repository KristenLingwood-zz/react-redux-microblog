import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  //set state to post id, title, body, default editing false
  state = {
    id: this.props.id,
    title: this.props.title,
    body: this.props.body,
    editing: false
  };

  // change handler function for form change
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // switch editing boolean in state
  toggleEdit = evt => {
    this.setState({
      ...this.state,
      editing: !this.state.editing
    });
  };

  // handle edit of post
  handleEdit = evt => {
    evt.preventDefault();
    this.props.dispatch({
      type: 'UPDATE_POST',
      id: this.state.id,
      title: this.state.title,
      body: this.state.body
    });
    this.setState({
      ...this.state,
      editing: !this.state.editing
    });
  };

  render() {
    // how to map over comments array in redux state?
    // const comments = this.props.posts.comments.map(c => (
    //   <p key={c.commentID}>{c.text}</p>
    // ));
    let post;
    if (!this.state.editing) {
      post = (
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.body}</p>
          <button onClick={this.toggleEdit}>Edit Post</button>
          <button onClick={this.props.deleteHandler}>DELETE post</button>
        </div>
      );
    } else {
      post = (
        <div>
          <form onSubmit={this.handleEdit}>
            <label htmlFor="Title">Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="Body">Body</label>
            <input
              type="textarea"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button>Update Post</button>
          </form>
        </div>
      );
    }
    return (
      <div>{post}</div>
      // how to make list of comments and add comment form?
      // <div>
      //   <div>{post}</div>
      //   <div>
      //     <h6>Comments:</h6>
      //     <div>{comments}</div>
      //     <button onClick={this.addCommentForm}>Add Comment</button>
      //   </div>
      // </div>
    );
  }
}

export default connect()(Post);
