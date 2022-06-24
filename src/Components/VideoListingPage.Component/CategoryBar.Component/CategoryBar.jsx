import "./category-bar.css";
import React from "react";

const CategoryBar = () => {
  return (
    <>
      <div className="category-bar-body">
        <button className="btn btn-pri-outlined">all</button>
        <button className="btn btn-pri-outlined">Fiction</button>
        <button className="btn btn-pri-outlined">non fiction</button>
        <button className="btn btn-pri-outlined">self help</button>
        <button className="btn btn-pri-outlined">recommended</button>
      </div>
    </>
  );
};
export default CategoryBar;
