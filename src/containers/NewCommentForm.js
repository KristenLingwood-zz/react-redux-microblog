import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCommentForm extends Component {
  state = {
    text: ''
  };

  handleChange = evt => {
    this.setState({
      text: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.text.length < 1) {
      alert('Comment may not be blank');
    } else {
      this.props.dispatch({
        type: 'ADD_COMMENT',
        text: this.state.text
      });
      this.setState({
        text: ''
      });
    }
  };
  render() {
    return (
      <div>
        <h1>COMMENT FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Text">Comment: </label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Publish Comment</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewCommentForm);
