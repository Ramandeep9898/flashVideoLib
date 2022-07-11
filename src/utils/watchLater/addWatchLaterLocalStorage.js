const addWatchLaterLocalStorage = (
  watchLaterState,
  INITIAL_WATCH_LATER_DATA
) => {
  console.log("watchLaterState1",watchLaterState)
  // JSON.stringify(watchLaterState) !==
  //   JSON.stringify(INITIAL_WATCH_LATER_DATA) &&
  watchLaterState && localStorage.setItem("userWatchLaterData", JSON.stringify(watchLaterState));
  

};
export default addWatchLaterLocalStorage;
