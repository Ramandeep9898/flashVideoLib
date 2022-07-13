import React from "react";
import { createContext, useContext, useReducer } from "react";
import { sortReducerFunc } from "../Reducers/sortReducerFunc";

const categoryContext = createContext();

const useCategory = () => useContext(categoryContext);

const initialState = {
  categories: {
    bestseller: false,
    fiction: false,
    nonfiction: false,
    selfhelp: false,
    recommended: false,
  },
};

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortReducerFunc, initialState);
  return (
    <categoryContext.Provider value={{ state, dispatch }}>
      {children}
    </categoryContext.Provider>
  );
};

export { useCategory, CategoryProvider };
