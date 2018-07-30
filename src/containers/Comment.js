import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.commentText}</p>
      </div>
    );
  }
}

export default connect()(Comment);
