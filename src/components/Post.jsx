import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostListContext } from "../store/post_list_store";
import { nanoid } from "nanoid";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  const handleDelete = (postId) => {
    deletePost(postId);
  };
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger post-badge"
          onClick={() => handleDelete(post.id)}
        >
          <AiFillDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={nanoid()}
            className="badge rounded-pill text-bg-primary post-tags"
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by - <strong>{post.reactions}</strong>{" "}
          people
        </div>
      </div>
    </div>
  );
};

export default Post;
