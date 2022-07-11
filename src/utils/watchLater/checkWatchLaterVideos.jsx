const checkWatchLaterVideos = (
  watchLater,
  currentDispatchValue,
  WatchLaterOrPlaylist,
  currentDispatchValueQuantity
) => {
  console.log("watchLater")
  if (WatchLaterOrPlaylist === "WATCH_LATER") {
    if (watchLater.length !== 0) {
      let foundItem = false;
      let updatedData = watchLater.map((watchLaterData) => {
        if (watchLaterData.item._id === currentDispatchValue._id) {
          foundItem = true;
          if (!watchLaterData.inCart) {
            return { ...watchLaterData, inCart: true };
          } else {
            return {
              ...watchLaterData,
              quantity: watchLaterData.quantity + 1,
              inWishlist: false,
            };
          }
        }
        return watchLaterData;
      });
      if (!foundItem) {
        return [
          ...watchLater,
          {
            item: currentDispatchValue,
            inWishlist: false,
            inCart: true,
            quantity: currentDispatchValueQuantity,
          },
        ];
      }
      return updatedData;
    }
  }
};
export default checkWatchLaterVideos;
