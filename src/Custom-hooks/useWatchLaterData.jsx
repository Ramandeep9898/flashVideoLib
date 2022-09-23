import { useReducer } from "react";
import addWatchLaterLocalStorage from "../utils/watchLater/addWatchLaterLocalStorage";
import checkWatchLaterVideos from "../utils/watchLater/checkWatchLaterVideos";
import {removeWatchLater} from "../utils/watchLater/removeWatchLater";

const localStorageWatchLaterData = JSON.parse(
  localStorage.getItem("userWatchLaterData")
);

const INITIAL_WATCH_LATER_DATA = localStorageWatchLaterData
  ? localStorageWatchLaterData
  : [];

const watchLaterReducer = (watchLaterState, action) => {
  console.log("action",action)
  const value = action.value;
  const quantity = action.quantity;
  
  switch (action.type) {
    case "ADD_TO_WATCH_LATER":
      // return checkWatchLaterVideos(watchLaterState, value, "WATCH_LATER");
      return[...watchLaterState, value]
    case "REMOVE_FROM_WATCH_LATER":
      return removeWatchLater(watchLaterState, value, "REMOVE_FROM_WATCH_LATER")
  }
};

const useWatchLaterData = () => {

  const [watchLaterState, watchLaterStateDispatch] = useReducer(
    watchLaterReducer,
    INITIAL_WATCH_LATER_DATA
  );

  addWatchLaterLocalStorage(watchLaterState, 
    INITIAL_WATCH_LATER_DATA
    );

  return { watchLaterState, watchLaterStateDispatch };

};

export default useWatchLaterData;
