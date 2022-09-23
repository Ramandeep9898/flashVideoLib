import "./category-bar.css";
import React from "react";
import { useCategory } from "../../../contexts/categoryContext";

const CategoryBar = () => {
  const { state, dispatch } = useCategory();
  const { categories } = state;
  const { bestseller, fiction, nonfiction, selfhelp, recommended } = categories;

  return (
    <>
      <div className="category-bar-body">
        <button
          onClick={() => {
            dispatch({ type: "FICTION" });
          }}
          className="btn btn-pri-outlined"
        >
          fiction
        </button>

        {/* <button
          onClick={() => {
            dispatch({ type: "ALL" });
          }}
          className="btn btn-pri-outlined"
        >
          All
        </button> */}

        <button
          onClick={() => {
            dispatch({ type: "NONFICTION" });
          }}
          className="btn btn-pri-outlined"
        >
          non fiction
        </button>

        <button
          onClick={() => {
            dispatch({ type: "SELFHELP" });
          }}
          className="btn btn-pri-outlined"
        >
          self help
        </button>

        <button
          onClick={() => {
            dispatch({ type: "RECOMMENDED" });
          }}
          className="btn btn-pri-outlined"
        >
          recommended
        </button>
      </div>
    </>
  );
};
export default CategoryBar;
