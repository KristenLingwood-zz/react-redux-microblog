import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewPostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // validate form is not empty
    if (this.state.title.length < 1 || this.state.body.length < 1) {
      alert('Post must have a title and a body');
    } else {
      // dispatch available because component is connect to redux store
      // dispatch an action with payload of post info
      this.props.dispatch({
        type: 'ADD_POST',
        title: this.state.title,
        body: this.state.body
      });
      // reset form to blank
      this.setState({
        title: '',
        body: ''
      });
    }
  };
  render() {
    return (
      <div>
        <h1>NewPostForm</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Title">Title: </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="Body">Body: </label>
          <input
            type="textarea"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <button>Publish Post</button>
        </form>
      </div>
    );
  }
}

// NewPostForm is connected but does not need any props from redux so no mapStateToProps needed
export default connect()(NewPostForm);
