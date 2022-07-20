import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ name }) => {
  return (
    <>
      <div className="empty-comp">
        <h1 className="text-center">Your {name} is empty.</h1>
        <Link to="/VideoListing">
          <button className="btn solid-pri-btn mgT-16">explore now</button>
        </Link>
      </div>
    </>
  );
};
export default Empty;
