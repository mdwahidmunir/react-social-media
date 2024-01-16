import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;

  if (action.type === "ADD_POST") {
    console.log("Post :", action.payload.post);
    console.log("current Items :", currentPostList);
    newPostList = [action.payload.post, ...currentPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

  return newPostList;
};

const DEFAULT_POST_LIST = [
  // {
  //   id: 1,
  //   title: "Dummy post",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   reactions: 8,
  //   userId: "John",
  //   tags: ["vacation", "enjoy", "coding"],
  // },
  // {
  //   id: 2,
  //   title: "Dummy post 2",
  //   body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //   reactions: 35,
  //   userId: "Doe",
  //   tags: ["JS", "React", "Python"],
  // },
];

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

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

  return (
    <PostListContext.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
