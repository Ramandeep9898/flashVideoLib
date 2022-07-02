export const addWatchLater = (item, whatTo, watchLaterStateDispatch) => {
  console.log(item);
  whatTo === "WATCH_LATER"
    ? watchLaterStateDispatch({
        type: "ADD_TO_WATCH_LATER",
        value: item,
        quantity: 1,
      })
    : watchLaterStateDispatch({
        type: "ADD_TO_WISHLIST",
        value: item,
        quantity: 1,
      });
};
