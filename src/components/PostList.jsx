import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/post_list_store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const handleGetPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  };
  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage onGetPosts={handleGetPosts} />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
