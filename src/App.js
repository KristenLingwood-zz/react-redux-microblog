import React, { Component } from 'react';
import TitleList from './containers/TitleList';
import PostList from './containers/PostList';
import NewPostForm from './containers/NewPostForm';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the microblog</h1>
        <h2>Built with React and Redux</h2>
        <TitleList />
        <PostList />
        <NewPostForm />
      </div>
    );
  }
}

export default App;
