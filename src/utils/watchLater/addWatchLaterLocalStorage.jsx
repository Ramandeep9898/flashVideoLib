const addWatchLaterLocalStorage = (
  watchLaterState,
  INITIAL_WATCH_LATER_DATA
) => {
  JSON.stringify(watchLaterState) !==
    JSON.stringify(INITIAL_WATCH_LATER_DATA) &&
    localStorage.setItem("userWatchLaterData", JSON.stringify(watchLaterState));
};
export default addWatchLaterLocalStorage;
