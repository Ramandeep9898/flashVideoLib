import checkWatchLaterVideos from "../utils/watchLater/checkWatchLaterVideos";

const watchLaterReducer = (watchLaterState, action) => {
  const value = action.value;
  const quantity = action.quantity;

  switch (action.type) {
    case "ADD_TO_WATCH_LATER":
      return checkWatchLaterVideos(watchLaterState, value, "WATCH_LATER");
  }
};
export default watchLaterReducer;
