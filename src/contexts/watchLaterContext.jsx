import React, { createContext, useContext } from "react";
import useWatchLaterData from "../Custom-hooks/useWatchLaterData";

// console.log(useWatchLaterData);
const WatchLaterContext = createContext({});
const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const { watchLaterState, watchLaterStateDispatch } = useWatchLaterData();
  // console.log(watchLaterState );
  return (
    <WatchLaterContext.Provider
      value={{ watchLaterState, watchLaterStateDispatch }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};

export { useWatchLater, WatchLaterProvider };
