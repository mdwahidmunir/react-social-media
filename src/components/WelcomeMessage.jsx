const WelcomeMessage = ({ onGetPosts: handleGetPosts }) => {
  return (
    <center className="welcome-message">
      <h2>There are no post present !</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleGetPosts}
      >
        Get all posts
      </button>
    </center>
  );
};

export default WelcomeMessage;
