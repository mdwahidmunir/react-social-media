import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/post_list_store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.length !== 0 &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
