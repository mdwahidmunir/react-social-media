import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/post_list_store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.length === 0 ? (
        <WelcomeMessage />
      ) : (
        postList.map((post) => <Post key={post.id} post={post} />)
      )}
    </>
  );
};

export default PostList;
