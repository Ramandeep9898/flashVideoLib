import React, { createContext, useContext } from "react";
import useWatchLaterData from "../Custom-hooks/useWatchLaterData";

const WatchLaterContext = createContext();
const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const {watchLaterState, watchLaterStateDispatch} = useWatchLaterData();
  return (
    <WatchLaterContext.Provider
      value={{watchLaterState, watchLaterStateDispatch}}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLater, WatchLaterProvider };
