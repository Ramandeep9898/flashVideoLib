export const getWatchLaterItems = (productData, watchLaterOrPlaylist) =>
productData && watchLaterOrPlaylist === "watchLater"
  ? productData.filter((item) => item.watchLater)
  : productData.filter((item) => item.playList);
