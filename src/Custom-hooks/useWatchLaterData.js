import { useReducer } from "react";
import addWatchLaterLocalStorage from "../utils/watchLater/addWatchLaterLocalStorage";
import checkWatchLaterVideos from "../utils/watchLater/checkWatchLaterVideos"
// import watchLaterReducer from "../Reducers/watchLaterReducer";

// console.log("localStorageWatchLaterData", localStorageWatchLaterData);
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
console.log("watchLaterState",watchLaterState)
  switch (action.type) {
    case "ADD_TO_WATCH_LATER":
      // return checkWatchLaterVideos(watchLaterState, value, "WATCH_LATER");
      return[...watchLaterState, value]
  }
};

const useWatchLaterData = () => {
  const [watchLaterState, watchLaterStateDispatch] = useReducer(
    watchLaterReducer,
    INITIAL_WATCH_LATER_DATA
  );
  // console.log("INITIAL_WATCH_LATER_DATA",INITIAL_WATCH_LATER_DATA)
  // console.log("watchLaterState0",watchLaterState)
  addWatchLaterLocalStorage(watchLaterState, 
    INITIAL_WATCH_LATER_DATA
    );
  return { watchLaterState, watchLaterStateDispatch };
};

export default useWatchLaterData;
