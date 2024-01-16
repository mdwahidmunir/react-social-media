const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border spinner"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      />
    </div>
  );
};

export default Spinner;
