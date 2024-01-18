import { useRef, useContext } from "react";
import { nanoid } from "nanoid";
import { PostListContext } from "../store/post_list_store";

const CreatePosts = () => {
  const { addPost } = useContext(PostListContext);

  const titleElementRef = useRef();
  const bodyElementRef = useRef();
  const reactionsElementRef = useRef();
  const userIdElementRef = useRef();
  const tagsElementRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const post = {
      // id: nanoid(),
      title: titleElementRef.current.value,
      body: bodyElementRef.current.value,
      reactions: reactionsElementRef.current.value,
      userId: userIdElementRef.current.value,
      tags: tagsElementRef.current.value
        .split(" ")
        .filter((tag) => tag.trim() !== ""),
    };

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));

    titleElementRef.current.value = "";
    bodyElementRef.current.value = "";
    reactionsElementRef.current.value = "";
    userIdElementRef.current.value = "";
    tagsElementRef.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={(event) => handleOnSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElementRef}
          className="form-control"
          placeholder="Enter the title"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          ref={bodyElementRef}
          rows="4"
          className="form-control"
          id="content"
          placeholder="Enter the content here"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElementRef}
          className="form-control"
          placeholder="Enter the reactions"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElementRef}
          className="form-control"
          placeholder="Enter the User ID"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElementRef}
          className="form-control"
          placeholder="Enter the Tags"
          id="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePosts;
