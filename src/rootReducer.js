import uuid from 'uuid/v1';

// initial state is an empty array of posts
const INITIAL_STATE = {
  posts: []
};

// rootReducer runs when an action is dispatched
function rootReducer(state = INITIAL_STATE, action) {
  // if action has a type of add post
  if (action.type === 'ADD_POST') {
    // return the current state of posts plus the new post (with new id, title, body)
    return {
      ...state,
      posts: [
        ...state.posts,
        {
          id: uuid(),
          title: action.title,
          body: action.body
        }
      ]
    };
  }
  if (action.type === 'UPDATE_POST') {
    return {
      ...state,
      posts: state.posts.map(p => {
        if (p.id === action.id) {
          p.id = action.id;
          p.title = action.title;
          p.body = action.body;
          return p;
        }
        return p;
      })
    };
  }
  if (action.type === 'DELETE_POST') {
    return {
      ...state,
      posts: state.posts.filter(p => {
        if (p.id !== action.id) {
          return p;
        }
      })
    };
  }
  // Attempting to make add comment function:
  // if (action.type === 'ADD_COMMENT') {
  //   return {
  //     ...state,
  //     posts: [
  //       ...state.posts.map(p => {
  //         if (p.id === action.id) {
  //           return {
  //             ...state.posts.p,
  //             comments: [
  //               ...state.posts.comments,
  //               {
  //                 commentID: uuid(),
  //                 text: action.posts.text
  //               }
  //             ]
  //           };
  //         }
  //         return p;
  //       })
  //     ]
  //   };
  // }
  return { ...state };
}

export default rootReducer;
