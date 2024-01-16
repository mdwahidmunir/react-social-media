import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post_list_store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);
  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
