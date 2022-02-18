import React from "react";

const Loader = () => {
  return (
    <div className="text-center spinner-border text-info" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loader;
