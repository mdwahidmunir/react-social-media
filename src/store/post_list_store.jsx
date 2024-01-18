import { createContext, useReducer, useState, useEffect } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload.post, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

  return newPostList;
};

const DEFAULT_POST_LIST = [];

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addInitialPosts = (posts) => {
    const addInitialPostsAction = {
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: posts,
      },
    };
    dispatchPostList(addInitialPostsAction);
  };

  const addPost = (post) => {
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        post: post,
      },
    };
    dispatchPostList(addPostAction);
  };

  const deletePost = (postId) => {
    const deletePostAction = {
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    };
    dispatchPostList(deletePostAction);
  };

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    // Clean up funtion
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        fetching: fetching,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
