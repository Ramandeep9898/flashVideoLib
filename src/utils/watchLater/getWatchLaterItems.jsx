export const getWatchLaterItems = (productData, watchLaterOrPlaylist) =>
productData && watchLaterOrPlaylist === "watchLater"
  ? productData.filter((item) => item.inWishlist)
  : productData.filter((item) => item.inCart);
