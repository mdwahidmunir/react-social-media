import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger post-badge">
          <AiFillDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge rounded-pill text-bg-primary post-tags">
            {tag}
          </span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This post has been reacted by - <strong>{post.reactions}</strong>{" "}
          people
        </div>
      </div>
    </div>
  );
};

export default Post;
