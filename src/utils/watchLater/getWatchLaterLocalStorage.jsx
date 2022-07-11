export const getWatchLaterLocalStorage = (watchLaterState) =>
watchLaterState.length === 0
    ? JSON.parse(localStorage.getItem("userWatchLaterData"))
    : watchLaterState;
