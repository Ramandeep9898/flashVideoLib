import { useReducer } from "react";
import addWatchLaterLocalStorage from "../utils/watchLater/addWatchLaterLocalStorage";
import watchLaterReducer from "../Reducers/watchLaterReducer";

// console.log("localStorageWatchLaterData", localStorageWatchLaterData);
// const localStorageWatchLaterData = JSON.parse(
//   localStorage.getItem("userWatchLaterData")
// );

// const INITIAL_WATCH_LATER_DATA = localStorageWatchLaterData
//   ? localStorageWatchLaterData
//   : [];

const useWatchLaterData = () => {
  const [watchLaterState, watchLaterStateDispatch] = useReducer(
    watchLaterReducer,
    // INITIAL_WATCH_LATER_DATA
  );
  addWatchLaterLocalStorage(watchLaterState, 
    // INITIAL_WATCH_LATER_DATA
    );
  return { watchLaterState, watchLaterStateDispatch };
};

export default useWatchLaterData;
